export default defineNuxtConfig({
  ssr: true,
  $meta: {
    htmlAttrs: {
      lang: 'pt'
    }
  },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'app-theme'
  },
  robots: {
    disallow: '',
    allow: '/',
  },
  site: {
    url: 'https://jefflsilva.github.io/',
    name: 'Consult Match - Plataforma de agendamento de consultas'
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ]
  }
})
