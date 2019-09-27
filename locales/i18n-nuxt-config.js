const en = require('./en')
const es = require('./es')

const i18n = {
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English",
      file: "en/index.js"
    },
    {
      code: "es",
      iso: "en-ES",
      name: "Español",
      file: "es/index.js"
    }
  ],
  defaultLocale: "en",
  routes: {
    projects: {
      en: "/projects",
      es: "/proyectos"
    },
    travels: {
      en: "/travels",
      es: "/viajes"
    },
    articles: {
      en: "/articles",
      es: "/articulos"
    },
    about: {
      en: "/about",
      es: "/sobre-mi"
    }
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, es }
  }
};

module.exports = { i18n }