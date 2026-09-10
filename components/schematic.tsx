const tracks = [
  {
    index: 'Track 01 / External',
    name: 'AI and data systems built for a partner',
    steps: [
      'Problem, constraints and success criteria',
      'Data foundation, pipelines and quality controls',
      'Model development, training and evaluation',
      'Deployment, integration and monitoring',
      'Operated system delivered to the partner',
    ],
  },
  {
    index: 'Track 02 / Internal',
    name: 'Trading technology held in private R&D',
    steps: [
      'Publicly stated research hypotheses',
      'Private market data systems and features',
      'Models, software and internal validation',
      'Commercialization decision, not automatic',
      'Possible future paid tool, selectively offered',
    ],
  },
];

export function Schematic() {
  return (
    <figure className="schematic" aria-labelledby="schematic-caption">
      <div className="schematic-head">
        <span>Fig. 01 / Two-track operation</span>
        <b>Disclosure boundary</b>
      </div>
      <div className="schematic-grid">
        {tracks.map((track, i) => (
          <section
            className={i === 1 ? 'schematic-track is-private' : 'schematic-track'}
            key={track.index}
          >
            <span className="track-head">{track.index}</span>
            <p className="track-name">{track.name}</p>
            <ol className="track-steps">
              {track.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        ))}
      </div>
      <figcaption id="schematic-caption">
        <span>Boundary</span>
        <p>
          Partner systems are designed, delivered and operated with the company
          that commissioned them. Internal trading technology stays proprietary,
          and no commercial product is available today.
        </p>
      </figcaption>
    </figure>
  );
}
