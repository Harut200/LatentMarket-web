'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { BrandMark } from '@/components/brand-mark';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/partnerships', label: 'AI & data partnerships' },
  { href: '/research', label: 'Trading tools R&D' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="site-header" data-scrolled={scrolled}>
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
          id="main-navigation"
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
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
