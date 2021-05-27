export default {
  // Target: https://go.nuxtjs.dev/config-target
  srcDir: __dirname,

  target: 'static',

  env: {
    baseURL: 'http://test.local'
  },

  trailingSlash: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    routes: [
      '/page/1',
      '/page/2',
      '/page/3',
      '/page/4',
      '/page/5',
      '/page/6',
      '/admin/page/1',
      '/admin/page/2',
      '/admin/page/3',
      '/admin/page/4',
      '/admin/page/5',
      '/admin/page/6',
    ]
  }
}
