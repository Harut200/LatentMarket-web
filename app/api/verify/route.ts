import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token');
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  if (!token || !supabaseUrl || !supabaseKey)
    return NextResponse.redirect(`${siteUrl}/waitlist?verified=invalid`);
  const response = await fetch(
    `${supabaseUrl}/rest/v1/intake_submissions?verification_token=eq.${encodeURIComponent(token)}&verified_at=is.null`,
    {
      method: 'PATCH',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        verified_at: new Date().toISOString(),
        verification_token: null,
      }),
    },
  );
  return NextResponse.redirect(
    `${siteUrl}/waitlist?verified=${response.ok ? 'true' : 'invalid'}`,
  );
}
