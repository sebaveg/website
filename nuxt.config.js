// import blogsEn from "./contents/en/blogsEn.js";
// import blogsEs from "./contents/es/blogsEs.js";

const colors = require("vuetify/es5/util/colors").default;
const { i18n } = require("./locales/i18n-nuxt-config");

module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: "Sebastian Cardoso Castillo (coding)",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/icono.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "cyan",
    height: "3px"
  },
  /*
   ** Global CSS
   */
  css: [],
  pageTransition: {
    name: "slide-fade"
  },
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "@nuxtjs/vuetify"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/markdownit", ["nuxt-i18n", i18n]],
  markdownit: {
    preset: "default",
    linkkify: true,
    breaks: true
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
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
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
  // generate: {
  //   routes: ["/es", "404"]
  //     .concat(blogsEn.map(w => `/blog/${w}`))
  //     .concat(blogsEs.map(w => `es/blog/${w}`))
  // }
};
