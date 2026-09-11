import { NextResponse } from 'next/server';
import { siteUrl } from '@/lib/site';

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const token = searchParams.get('token');
  const requestedKind = searchParams.get('kind');
  const invalidDestination =
    requestedKind === 'partnership' ? '/partnerships' : '/waitlist';
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!token || !supabaseUrl || !supabaseKey)
    return NextResponse.redirect(
      `${siteUrl}${invalidDestination}?verified=invalid`,
    );
  const response = await fetch(
    `${supabaseUrl}/rest/v1/intake_submissions?verification_token=eq.${encodeURIComponent(token)}&verified_at=is.null&select=kind`,
    {
      method: 'PATCH',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({
        verified_at: new Date().toISOString(),
        verification_token: null,
      }),
    },
  );
  if (!response.ok)
    return NextResponse.redirect(
      `${siteUrl}${invalidDestination}?verified=invalid`,
    );

  const updated = (await response.json()) as { kind?: string }[];
  if (updated.length !== 1)
    return NextResponse.redirect(
      `${siteUrl}${invalidDestination}?verified=invalid`,
    );

  const destination =
    updated[0].kind === 'partnership' ? '/partnerships' : '/waitlist';
  return NextResponse.redirect(`${siteUrl}${destination}?verified=true`);
}
