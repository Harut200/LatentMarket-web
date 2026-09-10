# LatentMarket Labs website

Public website for LatentMarket Labs. The site is a Next.js App Router project prepared for Vercel.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add credentials only to the local environment or Vercel project settings. Never commit credentials.

## Form integrations

1. Create a Supabase project and run `supabase/schema.sql` in its SQL editor.
2. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in Vercel.
3. Verify the sending domain in Resend, then set `RESEND_API_KEY`, `RESEND_FROM_EMAIL` and `NOTIFICATION_EMAIL`.
4. Create the Telegram bot and private alert chat, then set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`.
5. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS custom domain.
6. Submit and confirm one waitlist request and one partnership request in the production preview before launch.

The Supabase service-role key, Resend API key and Telegram bot token are server-only variables. They must never use the `NEXT_PUBLIC_` prefix.

## Launch gate

Do not make the production deployment public until all of these are complete:

- Custom domain connected with HTTPS
- `NEXT_PUBLIC_SITE_URL` set to that domain
- Favicon checked in production
- No platform or generated-site branding visible
- Privacy policy updated with a real privacy contact
- Terms reviewed for the operating legal entity and governing law
- Supabase storage verified with row-level security enabled
- Resend confirmation and team alert tested
- Telegram team alert tested
- Mobile, keyboard and form error states reviewed
- Research wording approved for public disclosure

## Verification

```bash
npm run lint
npm run build
npm audit --omit=dev
```
