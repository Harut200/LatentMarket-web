export function SystemMap() {
  return (
    <figure className="system-map" aria-labelledby="system-map-caption">
      <div className="figure-topline">
        <span>LatentMarket Labs / system</span>
        <span>Two-track model</span>
      </div>
      <div className="system-map-body">
        <section>
          <span>External / 01</span>
          <h2>AI and data systems</h2>
          <p>Business, product or scientific problem</p>
          <div className="flow-line">
            <i />
            <i />
            <i />
          </div>
          <strong>Architecture, models and deployed software</strong>
        </section>
        <section>
          <span>Internal / 02</span>
          <h2>Trading technology R&amp;D</h2>
          <p>Cryptocurrency and complex markets</p>
          <div className="flow-line">
            <i />
            <i />
            <i />
          </div>
          <strong>Potential paid tools, subject to approval</strong>
        </section>
      </div>
      <figcaption id="system-map-caption">
        <span>Boundary</span>
        <p>
          Company systems are designed and delivered for a partner. Internal
          trading technology remains proprietary, with no commercial product
          currently available.
        </p>
      </figcaption>
    </figure>
  );
}
