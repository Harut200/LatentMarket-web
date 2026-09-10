import Link from 'next/link';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import { SystemMap } from '@/components/system-map';

const capabilities = [
  [
    'AI and ML architecture',
    'System design, technical choices, interfaces and delivery plans shaped around real constraints.',
  ],
  [
    'Data foundations',
    'Data platforms, pipelines, quality controls, feature systems and analytical infrastructure.',
  ],
  [
    'Model development and training',
    'Machine learning and deep learning models built, trained, evaluated and improved for the task.',
  ],
  [
    'Deployment and integration',
    'Inference services, application integration and production delivery across existing systems.',
  ],
  [
    'MLOps and reliability',
    'Versioning, monitoring, reproducibility and operational controls for models in production.',
  ],
  [
    'Analytics and applied research',
    'Decision analytics, experimentation, scientific machine learning and specialized AI investigation.',
  ],
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">AI, machine learning and data systems</p>
          <h1>
            We architect, build and deploy AI systems. We also develop
            proprietary technology for complex-market trading.
          </h1>
          <p className="hero-intro">
            LatentMarket Labs works with companies across the full technical
            lifecycle, from data foundations and system architecture to model
            training, deployment and production reliability. Separately, our
            internal R&amp;D program develops private tools for cryptocurrency
            and complex-market trading. Nothing is available for purchase today.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/partnerships">
              Explore AI and data partnerships{' '}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link className="text-link" href="/research">
              View trading technology R&amp;D{' '}
              <MoveUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
        <SystemMap />
      </section>

      <section className="status-band">
        <div className="shell status-grid system-status">
          <div>
            <p className="eyebrow muted">How we operate</p>
            <p className="status-title">Two distinct tracks</p>
          </div>
          <p>
            Company partnerships move from architecture and data through model
            training, deployment and operation. Internal R&amp;D develops
            proprietary trading technology that may be commercialized only after
            validation and internal approval.
          </p>
          <Link className="text-link light" href="#two-tracks">
            See the full system <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>

      <section className="section shell" id="two-tracks">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">The operating model</p>
            <h2>Partnership work and proprietary R&amp;D stay separate.</h2>
          </div>
          <p>
            Each track has its own audience, commercial model and disclosure
            boundary.
          </p>
        </div>
        <div className="track-grid">
          <article className="track-card partnership-track">
            <div className="track-number">01</div>
            <p className="track-label">AI and data partnerships</p>
            <h3>End-to-end systems built for real operating environments.</h3>
            <p>
              We help companies design data foundations, architect AI and
              machine learning systems, develop and train models, integrate them
              into products, deploy them and keep them reliable in production.
            </p>
            <ol>
              <li>Define the problem, constraints and success criteria</li>
              <li>Architect the data, model and application layers</li>
              <li>Build, train and evaluate the system</li>
              <li>Deploy, monitor and improve it in operation</li>
            </ol>
            <Link className="text-link" href="/partnerships">
              Build with us <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </article>
          <article className="track-card private-track">
            <div className="track-number">02</div>
            <p className="track-label">Private trading technology</p>
            <h3>Proprietary tools for complex markets.</h3>
            <p>
              We research and develop systems for cryptocurrency and other
              complex-market trading. We publish a small number of hypotheses.
              The data, methods, models, software and results remain private.
            </p>
            <ol>
              <li>Public hypotheses define the research direction</li>
              <li>Models, software and validation remain internal</li>
              <li>Commercialization is considered only after R&amp;D</li>
              <li>Any future offer is paid and selectively approved</li>
            </ol>
            <Link className="text-link light-card" href="/waitlist">
              Join the future product waitlist{' '}
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="section capability-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Company capabilities</p>
              <h2>From data foundations to deployed systems.</h2>
            </div>
            <p>
              We can own a complete delivery or strengthen a specific layer of
              an existing product, platform or research program.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map(([title, text], i) => (
              <article key={title}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section evidence-section">
        <div className="shell evidence-grid">
          <div className="evidence-title">
            <p className="eyebrow">Shared technical standard</p>
            <h2>Systems must be defensible before they can be dependable.</h2>
          </div>
          <div className="evidence-list">
            {[
              [
                'Architecture',
                'Design around system boundaries, operating constraints and failure modes.',
              ],
              [
                'Data',
                'Make provenance, quality, transformations and ownership explicit.',
              ],
              [
                'Models',
                'Train and evaluate against credible baselines and real operating conditions.',
              ],
              [
                'Operations',
                'Deploy with monitoring, reproducibility and a path for safe improvement.',
              ],
            ].map(([title, description], i) => (
              <div className="evidence-row" key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell dual-cta">
        <div>
          <p className="eyebrow">For companies</p>
          <h2>Bring us a difficult AI, machine learning or data problem.</h2>
          <p>
            Tell us what exists today, what needs to be built and how success
            should be measured in operation.
          </p>
          <Link className="button button-dark" href="/partnerships">
            AI and data partnership enquiry{' '}
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <div>
          <p className="eyebrow">For prospective customers</p>
          <h2>Request consideration for future paid tools.</h2>
          <p>
            No product is on sale today. If we decide to commercialize, we will
            choose who may receive an offer and under what terms.
          </p>
          <Link className="button button-primary" href="/waitlist">
            Join the future product waitlist{' '}
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
