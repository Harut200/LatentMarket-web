import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trading tools R&D',
  description:
    'Selected public hypotheses from LatentMarket Labs’ private R&D program for cryptocurrency and complex-market trading tools.',
  alternates: { canonical: '/research' },
  openGraph: {
    title: 'Private trading technology R&D | LatentMarket Labs',
    description:
      'Selected public hypotheses from a proprietary program developing possible future complex-market trading tools.',
    url: '/research',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private trading technology R&D | LatentMarket Labs',
    description:
      'Selected public hypotheses from a proprietary program developing possible future complex-market trading tools.',
  },
};

export default function ResearchPage() {
  return (
    <main>
      <section className="page-hero shell">
        <p className="eyebrow">Private trading technology R&amp;D</p>
        <h1>Private R&amp;D for complex-market trading tools.</h1>
        <p>
          Our internal program develops tools for cryptocurrency and other
          complex-market trading. We disclose selected hypotheses so people can
          understand the research direction. The technology, evidence and
          implementation remain proprietary. No product is currently for sale.
        </p>
      </section>
      <section className="privacy-statement">
        <div className="shell">
          <span>Public disclosure</span>
          <p>Hypotheses and broad research intent</p>
          <i aria-hidden="true" />
          <span>Private property</span>
          <p>Data systems, models, software, validation and results</p>
        </div>
      </section>
      <section className="research-scope shell">
        <aside>
          <p>Private program</p>
          <a href="#hypotheses">Public hypotheses</a>
          <a href="#private">Held privately</a>
          <a href="#status">Current stage</a>
          <a href="#access">Commercialization gate</a>
        </aside>
        <div className="research-body">
          <section id="hypotheses" className="research-block">
            <p className="eyebrow">01 / Public hypotheses</p>
            <h2>What we are prepared to disclose.</h2>
            <div className="hypothesis-list">
              <article>
                <span>H1</span>
                <div>
                  <h3>Liquidity and predictability</h3>
                  <p>
                    Short-horizon predictive structure may vary systematically
                    with measured liquidity. Any apparent relationship must
                    remain after conservative costs and controlled comparisons.
                  </p>
                </div>
              </article>
              <article>
                <span>H2</span>
                <div>
                  <h3>Incremental market-state information</h3>
                  <p>
                    Trade flow, order-book state and derivatives conditions may
                    contain information beyond price and volume alone. The value
                    of each information family must be tested through controlled
                    ablation.
                  </p>
                </div>
              </article>
            </div>
            <p className="disclaimer">
              These are research hypotheses, not findings, forecasts, signals or
              performance claims.
            </p>
          </section>
          <section id="private" className="research-block">
            <p className="eyebrow">02 / Private by design</p>
            <h2>The tools and technical work remain private.</h2>
            <div className="private-grid">
              {[
                'Market data systems and curation',
                'Features and market representations',
                'Models and training systems',
                'Trading and analytical software',
                'Validation results and failure analysis',
                'Execution and risk tooling',
              ].map((item, i) => (
                <div key={item}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <p className="lead">
              Nothing described here is offered for sale. Completion of R&amp;D
              will lead to an internal commercialization decision, not an
              automatic launch. We may decide not to sell any tool.
            </p>
          </section>
          <section id="status" className="research-block status-panel">
            <div>
              <p className="eyebrow">03 / Current stage</p>
              <h2>Pre-product and under active development.</h2>
            </div>
            <div>
              <p>
                The current program is building data systems, research controls,
                models, software and a rigorous validation process. We are not
                presenting a finished product, an accepted market finding or a
                commercially available trading system.
              </p>
              <p>
                Only after the technology has passed the required development
                and review will we decide whether any part should become a
                commercial product.
              </p>
            </div>
          </section>
          <section id="access" className="research-block access-model">
            <p className="eyebrow">04 / Commercialization gate</p>
            <h2>
              Finishing the technology does not automatically make it a product.
            </h2>
            <div className="access-steps">
              <div>
                <span>01</span>
                <h3>Complete</h3>
                <p>
                  Finish the research, engineering and validation required for a
                  defensible tool.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>Decide</h3>
                <p>
                  Determine whether any tool should be commercialized at all.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>Qualify</h3>
                <p>
                  Review prospective companies and individuals for fit, intended
                  use and confidentiality.
                </p>
              </div>
              <div>
                <span>04</span>
                <h3>Offer</h3>
                <p>
                  If approved, make a paid offer governed by separate commercial
                  and use terms.
                </p>
              </div>
            </div>
            <Link className="button button-primary" href="/waitlist">
              Join the future product waitlist{' '}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
