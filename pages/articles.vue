<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" xl="7">
        <article-one />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import ArticleOne from '../blogs/hello'

  export default {
    name: 'Articles',
    components: { ArticleOne }
  }

</script>