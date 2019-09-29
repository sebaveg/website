<template lang="pug">
  v-app
    //- Header
    v-navigation-drawer(v-model="drawer" disable-resize-watcher fixed app)
      v-list(dense nav)
        v-list-item(two-line)
          v-list-item-avatar
            img(src="/seba2.jpg")
          v-list-item-content
            v-list-item-title Sebastian
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
            v-icon(style="font-size:2rem") {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="item.title")
    v-app-bar(dark fixed app)
      img(:src="logo" alt="Logo" height="40" width="40" class="mr-4")
      v-toolbar-title(v-text="title")
      v-btn( nuxt :to="`/es` + $route.fullPath" exact text class="ml-5") Español
      v-btn( nuxt :to="`/`" exact text ) English
      v-spacer
      v-app-bar-nav-icon(class="hidden-md-and-up" @click.stop="drawer = !drawer")
      v-toolbar-items(class="hidden-sm-and-down")
        v-btn(v-for="(item, i) in items" :key="i" class="mx-1" nuxt :to="item.to" exact text)
          v-icon(class="pr-1" style="font-size:2rem") {{item.icon}}
          span {{item.title}}
    v-content
      v-container(class="py-0" fluid)
        nuxt
    sc-footer
</template>

<script>
import ScFooter from '~/components/layout/Footer'
export default {
  components: { ScFooter },
  data() {
    return {
      drawer: false,
      logo: "/icono.png",
      title: ""
    };
  },
  computed: {
    items() {
      return [
        {
          icon: "mdi-home",
          title: this.$t('links.home'),
          to: this.localePath('/')
        },
        {
          icon: "mdi-laptop",
          title: this.$t('links.projects'),
          to: this.localePath('projects')
        },
        // {
        //   icon: "mdi-airplane",
        //   title: this.$t('links.travels'),
        //   to: this.localePath('travels')
        // },
        {
          icon: "mdi-notebook",
          title: this.$t('links.articles'),
          to: this.localePath('articles')
        },
        {
          icon: "mdi-information",
          title: this.$t('links.about'),
          to: this.localePath('about')
        }
      ]
    }
  }
};
</script>
