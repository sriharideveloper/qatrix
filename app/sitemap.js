export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.qatrixinfotech.com';
  return ['', '/about', '/privacy-policy', '/terms-and-conditions'].map((path) => ({ url: `${base}${path}`, lastModified: new Date('2026-07-20'), changeFrequency: path ? 'monthly' : 'weekly', priority: path ? 0.7 : 1 }));
}
