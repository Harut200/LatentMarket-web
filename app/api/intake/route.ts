import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

type Intake = {
  kind?: string;
  name?: string;
  email?: string;
  organization?: string;
  role?: string;
  interest?: string;
  profile_type?: string;
  access_type?: string;
  timeframe?: string;
  restrictions?: string;
  message?: string;
  consent?: string;
  website?: string;
};

const clean = (value: string | undefined, max = 2000) =>
  (value ?? '').trim().slice(0, max);
const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[
        character
      ] ?? character,
  );

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Intake;
    if (body.website) return NextResponse.json({ ok: true });

    const kind = body.kind === 'partnership' ? 'partnership' : 'waitlist';
    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const organization = clean(body.organization, 160);
    const role = clean(body.role, 160);
    const interest = clean(body.interest, 160);
    const profileType = clean(body.profile_type, 160);
    const accessType = clean(body.access_type, 160);
    const timeframe = clean(body.timeframe, 160);
    const message = clean(body.message);
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || body.consent !== 'yes')
      return NextResponse.json(
        { message: 'Please provide your name, a valid email and consent.' },
        { status: 400 },
      );
    if (kind === 'partnership' && (!interest || !message))
      return NextResponse.json(
        {
          message:
            'Please select an area and describe the proposed collaboration.',
        },
        { status: 400 },
      );
    if (
      kind === 'waitlist' &&
      (!profileType ||
        !accessType ||
        !timeframe ||
        !interest ||
        !message ||
        body.restrictions !== 'yes')
    )
      return NextResponse.json(
        { message: 'Please complete every required application field.' },
        { status: 400 },
      );

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseKey)
      return NextResponse.json(
        { message: 'Submissions are not open yet. Please check back shortly.' },
        { status: 503 },
      );

    const verificationToken = randomUUID();
    const stored = await fetch(
      `${supabaseUrl}/rest/v1/intake_submissions?on_conflict=kind,email`,
      {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          Prefer: 'resolution=merge-duplicates,return=minimal',
        },
        body: JSON.stringify({
          kind,
          name,
          email,
          organization: organization || null,
          role: role || null,
          interest: interest || null,
          profile_type: profileType || null,
          access_type: accessType || null,
          timeframe: timeframe || null,
          restrictions_acknowledged_at:
            body.restrictions === 'yes' ? new Date().toISOString() : null,
          message: message || null,
          consented_at: new Date().toISOString(),
          verification_token: verificationToken,
        }),
      },
    );
    if (!stored.ok) throw new Error('Storage request failed');

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
    const resendKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const notifications: Promise<Response>[] = [];

    if (resendKey && fromEmail) {
      notifications.push(
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [email],
            subject: 'Confirm your LatentMarket Labs email',
            html: `<p>Hello ${safeName},</p><p>Please confirm your email for your ${kind === 'partnership' ? 'partnership enquiry' : 'future product waitlist application'}.</p><p><a href="${siteUrl}/api/verify?token=${verificationToken}">Confirm email</a></p><p>If you did not submit this request, you can ignore this message.</p>`,
          }),
        }),
      );
      if (notificationEmail)
        notifications.push(
          fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${resendKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: fromEmail,
              to: [notificationEmail],
              subject: `New ${kind} submission`,
              html: `<p><strong>${safeName}</strong> (${safeEmail}) submitted a ${kind} enquiry.</p><p>Organization: ${escapeHtml(organization || 'Not provided')}</p><p>Profile: ${escapeHtml(profileType || role || 'Not provided')}</p><p>Interest: ${escapeHtml(interest || 'Not provided')}</p><p>Access: ${escapeHtml(accessType || 'Not provided')}</p><p>Timeframe: ${escapeHtml(timeframe || 'Not provided')}</p>`,
            }),
          }),
        );
    }
    if (telegramToken && telegramChatId)
      notifications.push(
        fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: `New ${kind} submission\n${name}\n${email}\n${organization || 'No organization provided'}\n${interest || 'No interest provided'}\n${accessType || timeframe || 'No access type provided'}`,
          }),
        }),
      );
    await Promise.allSettled(notifications);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: 'We could not submit your request. Please try again.' },
      { status: 500 },
    );
  }
}
