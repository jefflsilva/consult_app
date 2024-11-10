import type { SitemapUrlInput } from '#sitemap/types'
export default defineSitemapEventHandler(() => {
    return [
        {
            loc: '/cadastro',
            // will end up in the pages sitemap
            _sitemap: 'cadastro',
        },
    ] satisfies SitemapUrlInput[]
})