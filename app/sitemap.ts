import { MetadataRoute } from 'next'
import { PILLARS } from '@/config/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.moyointernational.com'

  const staticRoutes = [
    '',
    '/services',
    '/about',
    '/contact',
    '/become-a-provider',
    '/blog',
    '/privacy-policy',
    '/terms',
    '/code-of-conduct',
    '/cancellation-refund',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const pillarRoutes = PILLARS.map((pillar) => ({
    url: `${baseUrl}${pillar.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...pillarRoutes]
}
