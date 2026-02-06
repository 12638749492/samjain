import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://visioncut.in';
  const routes = ['/', '/services', '/portfolio', '/blog', '/about', '/contact'];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7
  }));
}
