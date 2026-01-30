import { MetadataRoute } from 'next';
import { SITE_CONFIG, SECTORS, SERVICES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    '',
    '/pricing/',
    '/menu/',
    '/gallery/',
    '/contact/',
    '/blog/',
  ];

  const servicePages = SERVICES.map((service) => `/services/${service.slug}/`);

  const sectorPages = SECTORS.map((sector) => `/catering/${sector.slug}/`);

  const blogPages = [
    '/blog/catering-cost-per-plate-noida/',
    '/blog/corporate-catering-noida-sector-63-65/',
  ];

  const allPages = [...staticPages, ...servicePages, ...sectorPages, ...blogPages];

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/services/') ? 0.9 : 0.8,
  }));
}
