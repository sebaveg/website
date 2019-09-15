<template>
  <v-footer dark app>
    <v-spacer></v-spacer>
    <ul>
      <li v-for="(item, k) in items" :key="k">
        <a :href="item.to" target="_blank" title="facebook">
          <v-icon style="font-size:2rem">{{item.icon}}</v-icon>
        </a>
      </li>
    </ul>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      items: [
        {
          icon: 'mdi-github-circle',
          to: 'https://github.com/sebaveg',
          title: 'facebook'
        },
        {
          icon: 'mdi-instagram',
          to: 'https://instagram.com/sebageounity',
          title: 'instagram'
        },
        {
          icon: 'mdi-linkedin',
          to: 'https://linkedin.com/in/sebastiancardoso92',
          title: 'linkedin'
        },
        {
          icon: 'mdi-facebook',
          to: 'https://facebook.com/sebageounity',
          title: 'facebook'
        },
        {
          icon: 'mdi-twitter',
          to: 'https://twitter.com/sebageounity',
          title: 'twitter'
        }
      ]
    }
  }
}
</script>


<style scoped>
ul{
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
}
ul li{
  padding-right: .5rem;
}
a {
  color: transparent !important;
}
</style>


