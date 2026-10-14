import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-dynamic'

// Indexation activée seulement quand ALLOW_INDEXING=true (une fois le vrai domaine branché).
// Avant ça, Google ne doit pas indexer l'URL Railway temporaire.
export default function robots(): MetadataRoute.Robots {
  if (process.env.ALLOW_INDEXING !== 'true') {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/api'] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
