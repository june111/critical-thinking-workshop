import colors from 'vuetify/es5/util/colors'
const isProd = process.env.NODE_ENV === 'production'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description
            },
            {
                hid: 'og:description',
                name: 'og:description',
                property: 'og:description',
                content: process.env.npm_package_description
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' },
            { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-512x512.png' },
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/api',
        { src: '~/plugins/lazyload', mode: 'client' },
        { src: '~/plugins/localStorage.js', mode: 'client' }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    devModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/sitemap',
        '@nuxtjs/google-analytics',
        '@nuxtjs/axios',
           '@nuxtjs/proxy'
    ],
    sitemap: {
        hostname: 'https://workshop.junezhu.top/',
        cacheTime: 1000 * 60 * 15,
        generate: true
    },
    'google-analytics': {
        id: 'UA-132667973-3',
        debug: {
            sendHitTask: isProd
        }
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        proxy: true,
        prefix: '/api'
    },
    proxy: {
        '/api': {
            target: 'https://cloud-dev.pandax.tech',
            pathRewrite: {
                '^/api': '/'
            },
            changeOrigin: true
        }
    },

    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    router: {
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                let position = {}
                if (to.matched.length < 2) {
                    position = { x: 0, y: 0 }
                } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
                    position = { x: 0, y: 0 }
                }
                if (to.hash) {
                    position = { selector: to.hash }
                }
                return position
            }
        }
    },
    render: {
        static: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}