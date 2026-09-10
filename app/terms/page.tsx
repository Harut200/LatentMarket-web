import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and conditions',
  alternates: { canonical: '/terms' },
};

const sections: [string, string][] = [
  [
    'Information only',
    'This website describes AI, machine learning and data-system partnership capabilities and a private trading-technology program in development. It does not provide investment, financial, legal or tax advice. Nothing on the site is an offer, recommendation or solicitation to trade any asset or instrument.',
  ],
  [
    'No performance claim',
    'Research questions, methods and conceptual figures are not research results. Material on this site must not be interpreted as evidence of predictive performance, profitability, a deployable trading strategy or the future availability of a product.',
  ],
  [
    'No current product offer',
    'No trading tool is currently offered for sale through this website. Completion of research and development does not guarantee that any tool will be released. LatentMarket Labs may decide not to commercialize a tool at all.',
  ],
  [
    'Waitlist and partnerships',
    'Submitting a form does not guarantee a response, a right to purchase, a commercial relationship or a partnership. Waitlist participation is not free product access. If a tool is commercialized, any offer will be paid, selectively approved and governed by separate written terms, restrictions, scope and pricing. We may qualify or decline any applicant at our discretion.',
  ],
  [
    'Intellectual property',
    'The site and its original content are owned by LatentMarket Labs or used with permission. No license to internal research, code, data, models, methods or other protected material is granted by access to this website. No waitlist application or website statement grants access to that material.',
  ],
  [
    'Acceptable use',
    'You may not misuse the site, attempt unauthorized access, interfere with its operation, submit unlawful material or use automated means that create unreasonable load.',
  ],
  [
    'Availability and liability',
    'The site is provided on an as-available basis. To the extent permitted by law, LatentMarket Labs disclaims implied warranties and is not liable for decisions made from site content or for indirect or consequential loss.',
  ],
  [
    'Changes',
    'We may update these terms as the website or services evolve. Continued use after an update means you accept the revised terms.',
  ],
];

export default function TermsPage() {
  return (
    <main className="legal shell">
      <div className="legal-head">
        <p className="eyebrow">Legal</p>
        <h1>Terms and conditions</h1>
        <p className="legal-date">Last updated: 10 September 2026</p>
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
