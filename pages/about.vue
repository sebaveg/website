<template>
  <v-layout justify-center wrap row>
    <v-flex xs11 sm10 md9 lg7 xl6>
      <section>
        <h2 class="display-2 font-wieght-bold my-5 text-center">{{ $t('about.title') }}</h2>
        <p>
          {{ $t('about.p1' )}}
        </p>
        <p>
          {{ $t('about.p2' )}}
        </p>
        <div class="text-center">
          <v-btn color="primary" class="mt-5  " nuxt to="/"
            >{{ $t('about.action' )}}</v-btn
          >
        </div>
      </section>
    </v-flex>
  </v-layout>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
p {
  font-family: "Merriweather", serif;
}
#app {
  font-family: "Merriweather", serif;
}
</style>
