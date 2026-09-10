'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { BrandMark } from '@/components/brand-mark';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/partnerships', label: 'AI & data partnerships' },
  { href: '/research', label: 'Trading tools R&D' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="shell nav-wrap">
        <Link
          className="wordmark"
          href="/"
          aria-label="LatentMarket Labs home"
          onClick={() => setOpen(false)}
        >
          <BrandMark size={46} priority />
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
