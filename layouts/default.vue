<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" disable-resize-watcher fixed app>
      <v-list dense nav>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="/seba2.jpg" />
          </v-list-item-avatar>        
          <v-list-item-content>
            <v-list-item-title>Sebastian</v-list-item-title>
            <v-list-item-subtitle>Menu de navegación</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark fixed app>
      <img :src="logo" alt="Logo" height="40" width="40" class="mr-4" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in items" :key="i" class="mx-1" nuxt :to="item.to" exact text >
          <v-icon class="pr-1">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-laptop",
          title: "Proyectos",
          to: "/proyects"
        },
        {
          icon: "mdi-airplane",
          title: "Viajes",
          to: "/travels"
        },
        {
          icon: "mdi-notebook",
          title: "Diario",
          to: "/diario"
        },
        {
          icon: "mdi-information",
          title: "Sobre mi",
          to: "/about"
        }
      ],
      logo: "/icono.png",
      title: "Seba Mate"
    };
  }
};
</script>
