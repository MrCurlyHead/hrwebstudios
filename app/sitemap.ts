import { MetadataRoute } from 'next'
import { siteSettings } from '@/site-settings'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hrstudios.com'

  const routes = siteSettings.navigation.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1 : 0.8,
  }))

  return [
    ...routes,
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]
}

