// nuxt.config.{js,ts}
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    baseURL: '/portofolio-zakki/',
    buildAssetsDir: '/assets/'
  },

  compatibilityDate: '2025-01-16'
})