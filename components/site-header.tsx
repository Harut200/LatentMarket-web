'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/partnerships', label: 'AI & data partnerships' },
  { href: '/research', label: 'Trading tools R&D' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link
          className="wordmark"
          href="/"
          aria-label="LatentMarket Labs home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-logo-frame" aria-hidden="true">
            <Image
              className="brand-logo-image"
              src="/latentmarket-labs-logo.png"
              alt=""
              width={54}
              height={54}
              priority
            />
          </span>
          <span>
            LatentMarket <b>Labs</b>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className={open ? 'nav-links open' : 'nav-links'}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="nav-cta"
            href="/waitlist"
            onClick={() => setOpen(false)}
          >
            Future product waitlist
          </Link>
        </nav>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
