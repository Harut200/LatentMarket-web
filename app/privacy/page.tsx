import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy policy' };
export default function PrivacyPage() {
  return (
    <main className="legal shell">
      <p className="eyebrow">Legal</p>
      <h1>Privacy policy</h1>
      <p className="legal-date">Last updated: 10 September 2026</p>
      <h2>Information we collect</h2>
      <p>
        When you submit a waitlist or partnership form, we may collect your
        name, email address, organization, role, applicant type, intended use,
        access interest, purchasing timeframe and the message you provide. We
        also receive basic technical information needed to operate and secure
        this website.
      </p>
      <h2>How we use information</h2>
      <p>
        We use submitted information to review your request, respond to you,
        assess fit for a possible future commercial tool, manage the relevant
        waitlist or partnership conversation, prevent abuse and maintain the
        security of our services. We do not sell personal information.
      </p>
      <h2>Service providers</h2>
      <p>
        We may use infrastructure and communication providers to host the site,
        store form submissions, verify email addresses and alert our team. Our
        intended providers include Vercel, Supabase, Resend and Telegram. Each
        provider processes data under its own terms and privacy practices.
      </p>
      <h2>Retention and choices</h2>
      <p>
        We retain information only as long as reasonably needed for the purpose
        for which it was collected, legal obligations and security. You may ask
        us to access, correct or delete information connected with your email
        address. Contact details will be added before public launch.
      </p>
      <h2>International processing</h2>
      <p>
        Service providers may process information in countries other than your
        own. Where required, we use appropriate safeguards for cross-border
        processing.
      </p>
      <h2>Changes</h2>
      <p>
        We may update this policy as the website and its data practices change.
        The date above identifies the current version.
      </p>
    </main>
  );
}
