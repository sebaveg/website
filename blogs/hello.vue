<template lang="md">
  # Como hice el sitio web para los bomberos voluntarios con un CMS en Nuxt y Strapi

## Introducción
Mi objetivo es desarrollar el sitio web para los bomberos voluntarios de Brandsen, Buenos Aires. La idea es que tengan un espacio personalizable para que puedan subir contenido ya que actualmente publican todo en su Facebook. No digo que este mal, pero un espacio propio en la web siempre va a tener mas ventajas como mas libertad.

Ellos tendrán una interfaz de adminitrador fácil de usar para que puedan subir sus post, imagenes, videos y cualquier otro contenido personalizable.

## Tecnologías usadas

1. Javasciprt.
2. [Vue.js](https://vuejs.org)
3. [Nuxt.js](http://nuxtjs.org)
4. [Strapi.io](https://strapi.io/)

##  Paso por paso
1. Research
2. Emepzando con un template
3. Definiendo el Layout
4. Instalando y configurando Strapi

## Research, definiendo el diseño y preparando el entorno
  Lo primero que voy a hacer es inspirarme de otros diseños para tener una idea de las secciones que voy a construir en el sitio. Con una simple busqueda en Google puedo definir el menú principal que tendrá:

  1. **Noticias:** Una sección en donde podrán reportar sus últimos trabajos.
  2. **Prevención:** Aquí podrán enseñar como prevenir incendios.
  3. **Sobre nosotros:** Aquí contarñan su historia y quienes son los integrantes actuales.
  4. **Contacto:** Pondré un formulario para que puedan escribir desde el sitio así como telefonos de contacto.

En la pagina principal pondré un Slider con imagenes que cambien continuamente. El sitio contendrá información sobre como contribuir con una cuota o haciendo donaciones. 

El sitio contendrá una sección privada de adminitración para que puedan gestionar el contenido sobre la estructura que voy a definir.

## Empezando con un template
Si estas leyendo esto porque queres hacer un proyecto similar asegurate de tener instalado Node.

Empiezo abriendo la terminal después de ubicarme en la carpeta donde quiero empezar el proyecto escribo esto: 
```sh
npx create-nuxt-app fireman-website
```
Me hace algunas preguntas de como quiero iniciar. Configuro mi proyecto de esta manera:
![Captura npx create-nuxt-app](./.readme-statics/config-initial.png)

Luego entro a la carpeta del proyecto, instalo las dependecias y lanzo la app para echarle un vistazo:
```sh
cd fireman-website && npm i && npm run dev 
```
Si abro mi navegador y entro a [localhost:3000](localhost:3000) puedo ver el template. Luego abro el pryoecto con mi editor favorito y borro el contenido dentro de *layout/default* y de *pages/index* ya que no me intereza. Entonces inicio un repositorio con Git que mas tarde subiré a Github.
```sh
code .
git init && git add . && git commit -m "First commit"
```
### Una cosa mas!
A mi me gusta usar el famoso preprocesador de HTML llamado pug. A mi gusto tiene una sintaxis mas bonita y simple, aunque hay que tener mucho cuidado con la identación.
Para instalar pug en este entorno escribo en la terminal: 
```sh
npm i -D pug pug-plain-loader
```

## Definiendo el Layout
Voy a tener un Header y un Footer que seran usados en cada página de la aplicación. Así que empiezo creando dichos componentes dentro de *components/layout*. Entonces en *component/layout/Header.vue*:

```vue
<template lang="pug">
  header
    v-system-bar.systembar(color="black" dark window)
      h2.overline Para reportar una emergencia llama al #[strong 100]
    .presentation
      h4.body-1 Bienvenidos a
      br
      h1.display-2.font-weight-bold {{ title }}
    v-navigation-drawer(app disable-resize-watcher fixed v-model="drawer")
      v-list(nav)
        v-list-item(two-line)
          v-list-item-avatar
            img(src="/logo.jpg")
          v-list-item-content
            v-list-item-title Bomberos Voluntarios
            v-list-item-subtitle Menu de navegación
        v-divider
        v-list-item(
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        )
          v-list-item-action
            v-icon(style="font-size: 2rem") {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="item.title")
    v-app-bar.appbar(color="#353333" dark elevation="10")
      v-app-bar-nav-icon(class="hidden-md-and-up" @click.stop="drawer = !drawer")
      v-btn(text) Noticias
      v-btn(text) Prevencion
      v-img.logo(src="logo.jpg" height="100" width="100")
      v-btn(text) Sobre nosotros
      v-btn(text) Contacto
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Bomberos Voluntarios de Brandsen'
    }
  }
}
</script>

<style scoped>
.appbar,
.systembar,
.presentation {
  display: flex;
  justify-content: center;
}
.presentation {
  background: rgb(177, 16, 16);
  color: #fff;
  flex-wrap: wrap;
  padding: 1.5em 0;
}
.presentation h4 {
  text-align: center;
  width: 100%;
}
.presentation h1 {
  text-shadow: 1px 0 2px #000;
}
.logo {
  border-radius: 50%;
  margin: 0 1rem;
}
</style>

```
Cabe mencionar que he agregado un logo a la carpeta static y que ira en el medio del menu principal.
Ahora crearé el Footer en *components/layout/Footer*:
```vue
<template lang="pug">
  v-footer(fixed app)
    span &copy; 2019
</template>
```
Por ahora solo contendrá esto. Mas adelante sobre el final del proyecto me centrarñe en agregarle algo mas.

Ahora pasemos al contenido. Es hora de usar **Strapi**.

## Instalando y configurando Strapi
En la terminal:
```sh
npx create-strapi-app backend --quickstart
```
Automaticamente se abrira una pesaña en el navegador con esta dirección http://localhost:1337/admin/auth/register sino ingresala manualmente.
![Captura admin Strapi](./.readme-statics/admin-strapi.png)
Una vez que nos registramos nos mostrara el dashboard con el mensaje de bienvenida:
![Captura dashboard Strapi](./.readme-statics/dashboard-strapi.png)
Entonces hago click en el boton de crear tipo de contenido y creo la primera seccion llamada "noticia" que será la primera vista de la página principal. Luego empiezo a crear los campos que tendrá la noticia. Para empezar creo un 
Titulo, Contenido e Imagenes. Cada uno de estos campos seran llenados por el administrador final.

![Captura noticiaStrapi](./.readme-statics/creando-contenido.gif)

Ahora que ya tenemos la estructura vamos a crear un contenido de ejemplo:

![Captura noticiaStrapi](./.readme-statics/creando-noticia.gif)
</template>