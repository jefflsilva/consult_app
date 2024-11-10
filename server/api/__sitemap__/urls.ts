import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(() => {
    return [
        {
            loc: '/cadastro',
            // will end up in the pages sitemap
            _sitemap: 'cadastro',
        },
    ] satisfies SitemapUrlInput[]
})
