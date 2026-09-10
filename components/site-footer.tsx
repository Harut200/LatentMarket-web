import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="wordmark footer-mark" href="/">
            <span className="brand-logo-frame" aria-hidden="true">
              <Image
                className="brand-logo-image"
                src="/latentmarket-labs-logo.png"
                alt=""
                width={54}
                height={54}
              />
            </span>
            <span>
              LatentMarket <b>Labs</b>
            </span>
          </Link>
          <p>
            AI, machine learning and data systems for companies, plus private
            R&amp;D for cryptocurrency and complex-market trading tools.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <p>Explore</p>
            <Link href="/partnerships">AI &amp; data partnerships</Link>
            <Link href="/research">Trading tools R&amp;D</Link>
            <Link href="/waitlist">Future product waitlist</Link>
          </div>
          <div>
            <p>Legal</p>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms and conditions</Link>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} LatentMarket Labs</span>
        <span>
          No tool is currently for sale. Nothing here is investment advice.
        </span>
      </div>
    </footer>
  );
}
