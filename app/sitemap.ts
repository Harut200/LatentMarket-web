import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/research',
    '/waitlist',
    '/partnerships',
    '/privacy',
    '/terms',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : 0.7,
  }));
}
