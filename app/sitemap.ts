import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { services } from '@/data/services'
import { solutions } from '@/data/solutions'
import { projects } from '@/data/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: SITE_URL, priority: 1.0 },
    { url: `${SITE_URL}/services`, priority: 0.9 },
    { url: `${SITE_URL}/solutions`, priority: 0.9 },
    { url: `${SITE_URL}/portfolio`, priority: 0.8 },
    { url: `${SITE_URL}/digital-marketing`, priority: 0.8 },
    { url: `${SITE_URL}/about`, priority: 0.7 },
    { url: `${SITE_URL}/contact`, priority: 0.8 },
  ].map((r) => ({
    ...r,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const solutionRoutes = solutions.map((s) => ({
    url: `${SITE_URL}/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const portfolioRoutes = projects.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...solutionRoutes, ...portfolioRoutes]
}
