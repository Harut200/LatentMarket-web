import type { Metadata } from 'next';
import { IntakeForm } from '@/components/intake-form';

export const metadata: Metadata = { title: 'AI and data partnerships' };

const capabilities = [
  [
    'AI and ML system architecture',
    'Technical architecture, interfaces, model choices and delivery planning across the complete system.',
  ],
  [
    'Data platforms and engineering',
    'Pipelines, storage, transformation, quality controls, feature systems and reliable access to data.',
  ],
  [
    'Model development and training',
    'Machine learning models developed, trained, tuned and evaluated against the task and operating environment.',
  ],
  [
    'Deep learning and specialized AI',
    'Neural systems and specialized AI methods for complex perception, prediction, generation or decision problems.',
  ],
  [
    'Deployment and product integration',
    'Inference services, APIs, application integration and production delivery across existing technology stacks.',
  ],
  [
    'MLOps and model reliability',
    'Reproducibility, versioning, observability, monitoring and controlled improvement after deployment.',
  ],
  [
    'Analytics and experimentation',
    'Decision-focused analytics, forecasting, experimentation and interpretable reporting for complex data.',
  ],
  [
    'Scientific ML and applied R&D',
    'Scientific structure, simulation, numerical methods and original AI investigation when standard approaches are insufficient.',
  ],
];

export default function PartnershipsPage() {
  return (
    <main>
      <section className="page-hero shell">
        <p className="eyebrow">AI, machine learning and data partnerships</p>
        <h1>Architect, train and deploy systems that have to work.</h1>
        <p>
          We partner with companies across the full lifecycle of AI and data
          systems: strategy, architecture, data engineering, model development,
          training, evaluation, deployment, integration and production
          reliability.
        </p>
      </section>
      <section className="partner-capabilities shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>Work across the entire technical lifecycle.</h2>
          </div>
          <p>
            We can take responsibility for an end-to-end build or join at the
            layer where your team needs specialized depth.
          </p>
        </div>
        <div className="partner-grid">
          {capabilities.map(([title, text], i) => (
            <article key={title}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="engagement-section">
        <div className="shell">
          <div>
            <p className="eyebrow">Engagement structure</p>
            <h2>From problem definition to production operation.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>Discovery and architecture</h3>
                <p>
                  Define the outcome, constraints, system boundaries, risks and
                  technical approach.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Data foundation</h3>
                <p>
                  Establish the pipelines, quality controls, representations and
                  access patterns the system requires.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Build, train and evaluate</h3>
                <p>
                  Develop the software and models, run training, test failure
                  modes and validate performance.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Deploy and operate</h3>
                <p>
                  Integrate the system, deploy it, establish monitoring and
                  support reliable improvement in production.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="form-section">
        <div className="shell form-layout">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Describe the system you need to build or improve.</h2>
            <p>
              Useful enquiries explain the objective, current architecture,
              available data, technical constraints and production outcome. Do
              not send confidential material before we agree how to handle it.
            </p>
          </div>
          <IntakeForm kind="partnership" />
        </div>
      </section>
    </main>
  );
}
