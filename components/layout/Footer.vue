<template>
  <v-footer class="mt-5" dark padless>
    <v-card class="text-center" color="#212121" flat style="margin:0 auto">
      <v-card-text>
        <ul>
          <li v-for="(item, k) in items" :key="k">
            <a :href="item.to" target="_blank" :title="item.title">
              <v-icon style="font-size:2rem">{{item.icon}}</v-icon>
            </a>
          </li>
        </ul>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <h3 class="subtitle-1">me@sebastiancardoso.com</h3>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <h3 class="subtitle-2">{{ $t('footer.message') }}</h3>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        &copy;{{ new Date().getFullYear() }} - <strong>sebastiancardoso</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      items: [
        {
          icon: 'mdi-linkedin',
          to: 'https://linkedin.com/in/sebastiancardoso92',
          title: 'linkedin'
        },
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


