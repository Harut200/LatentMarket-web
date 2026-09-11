import type { Metadata } from 'next';
import { IBM_Plex_Mono, Instrument_Sans, Newsreader } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { siteUrl } from '@/lib/site';
import './globals.css';

const sans = Instrument_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const serif = Newsreader({
  variable: '--font-serif',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'LatentMarket Labs | AI, Machine Learning and Data Systems',
    template: '%s | LatentMarket Labs',
  },
  description:
    'End-to-end AI, machine learning and data systems for companies, plus private development of future cryptocurrency and complex-market trading tools.',
  applicationName: 'LatentMarket Labs',
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'LatentMarket Labs',
    title: 'LatentMarket Labs | AI, Machine Learning and Data Systems',
    description:
      'End-to-end AI, machine learning and data systems for companies, plus private development of future cryptocurrency and complex-market trading tools.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LatentMarket Labs | AI, Machine Learning and Data Systems',
    description:
      'End-to-end AI, machine learning and data systems for companies, plus private development of future cryptocurrency and complex-market trading tools.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
