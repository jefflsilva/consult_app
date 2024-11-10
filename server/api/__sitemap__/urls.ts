import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(() => {
    return [] satisfies SitemapUrlInput[]
})
