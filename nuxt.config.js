export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: 'white' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        sizes: 'any',
        href:
          "data:image/svg+xml;utf8,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E path %7B fill: none; stroke: %23000; stroke-width: .0662621; %7D @media (prefers-color-scheme: dark) %7B path %7B stroke: %23fff; %7D %3C/style%3E%3Cpath d='M.323.588L.5.412l.177.176' /%3E%3C/svg%3E"
      },
      {
        rel: 'mask-icon',
        href: '/favicon.svg',
        color: 'black'
      },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],

  /*
   ** Sass variables and mixins for .vue components
   */
  styleResources: {
    scss: ['./assets/scss/style-resources/*.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/v-lazy-image.js', '~/plugins/vue-router-referrer.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-responsive-loader'],
  responsiveLoader: {
    name: 'images/[name]-[width].[ext]',
    sizes: [640, 768, 960, 1024, 1280, 1600, 1920],
    placeholder: false, // no placeholder will be generated
    quality: 85, // images are compressed with medium quality
    format: 'png'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
