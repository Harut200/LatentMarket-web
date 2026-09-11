import type { Metadata } from 'next';
import { IntakeForm } from '@/components/intake-form';

export const metadata: Metadata = {
  title: 'Future trading tools waitlist',
  description:
    'Apply to be considered for future paid complex-market trading tools if LatentMarket Labs decides to commercialize them.',
  alternates: { canonical: '/waitlist' },
  openGraph: {
    title: 'Future trading tools waitlist | LatentMarket Labs',
    description:
      'A selective waitlist for possible future paid complex-market trading tools. No product is currently offered.',
    url: '/waitlist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future trading tools waitlist | LatentMarket Labs',
    description:
      'A selective waitlist for possible future paid complex-market trading tools. No product is currently offered.',
  },
};

export default async function WaitlistPage({
  searchParams,
}: {
  searchParams: Promise<{ verified?: string }>;
}) {
  const { verified } = await searchParams;
  return (
    <main>
      {verified === 'true' && (
        <output className="verification-banner">
          Your email is confirmed. Your application is ready for review.
        </output>
      )}
      {verified === 'invalid' && (
        <div className="verification-banner invalid" role="alert">
          This confirmation link is invalid or has already been used.
        </div>
      )}
      <section className="page-hero shell narrow">
        <p className="eyebrow">Future product waitlist</p>
        <h1>Apply to be considered for future paid tools.</h1>
        <p>
          Our complex-market trading tools are still in private R&amp;D and are
          not for sale today. After development and validation, we will decide
          whether to commercialize any tool. This waitlist helps us identify
          prospective company and individual customers if we proceed.
        </p>
      </section>
      <section className="selection-section shell">
        <div>
          <p className="label">
            <span className="idx">01</span> What application means
          </p>
          <h2>Interest in a possible product, not a purchase or promise.</h2>
        </div>
        <div className="selection-points">
          <article>
            <span>01</span>
            <h3>Development comes first</h3>
            <p>
              We will not offer a tool before its research, engineering and
              validation meet our standard.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Commercialization is optional</h3>
            <p>
              Completing R&amp;D does not guarantee a release. We may decide not
              to commercialize any tool.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Every future offer is paid and selective</h3>
            <p>
              Joining the waitlist provides no access or approval. If we
              proceed, every offer will be paid, with price, scope and
              eligibility determined case by case.
            </p>
          </article>
        </div>
      </section>
      <section className="form-section">
        <div className="shell form-layout">
          <div>
            <p className="label on-dark">
              <span className="idx">02</span> Waitlist application
            </p>
            <h2>Tell us who you are and how a future tool could fit.</h2>
            <p>
              Provide enough context for an initial review. Verified applicants
              may be contacted if we reach a relevant commercial stage. Do not
              include confidential information in this form.
            </p>
          </div>
          <IntakeForm kind="waitlist" />
        </div>
      </section>
    </main>
  );
}
