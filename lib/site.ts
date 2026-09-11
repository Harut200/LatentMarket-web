const productionFallback = 'https://latentmarket-labs.vercel.app';
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const productionUrl =
  configuredSiteUrl &&
  !/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(configuredSiteUrl)
    ? configuredSiteUrl
    : productionFallback;

export const siteUrl = (
  process.env.NODE_ENV === 'production'
    ? productionUrl
    : configuredSiteUrl || 'http://localhost:3000'
).replace(/\/$/, '');
