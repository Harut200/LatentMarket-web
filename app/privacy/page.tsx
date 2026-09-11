import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'How LatentMarket Labs collects, uses, stores and protects information submitted through this website.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy policy | LatentMarket Labs',
    description:
      'How LatentMarket Labs collects, uses, stores and protects information submitted through this website.',
    url: '/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy policy | LatentMarket Labs',
    description:
      'How LatentMarket Labs collects, uses, stores and protects information submitted through this website.',
  },
};

const sections: [string, string][] = [
  [
    'Information we collect',
    'When you submit a waitlist or partnership form, we may collect your name, email address, organization, role, applicant type, intended use, access interest, purchasing timeframe and the message you provide. We also receive basic technical information needed to operate and secure this website.',
  ],
  [
    'How we use information',
    'We use submitted information to review your request, respond to you, assess fit for a possible future commercial tool, manage the relevant waitlist or partnership conversation, prevent abuse and maintain the security of our services. We do not sell personal information.',
  ],
  [
    'Service providers',
    'We may use infrastructure and communication providers to host the site, store form submissions, verify email addresses and alert our team. Our intended providers include Vercel, Supabase, Resend and Telegram. Each provider processes data under its own terms and privacy practices.',
  ],
  [
    'Retention and choices',
    'We retain information only as long as reasonably needed for the purpose for which it was collected, legal obligations and security. You may ask us to access, correct or delete information connected with your email address. Submit a partnership enquiry with “Privacy or data request” selected and describe the request without including sensitive information.',
  ],
  [
    'International processing',
    'Service providers may process information in countries other than your own. Where required, we use appropriate safeguards for cross-border processing.',
  ],
  [
    'Changes',
    'We may update this policy as the website and its data practices change. The date above identifies the current version.',
  ],
];

export default function PrivacyPage() {
  return (
    <main className="legal shell">
      <div className="legal-head">
        <p className="eyebrow">Legal</p>
        <h1>Privacy policy</h1>
        <p className="legal-date">Last updated: 11 September 2026</p>
      </div>
      <div className="legal-body">
        {sections.map(([title, body], i) => (
          <section key={title}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
