<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="3" class="mt-2">
      <v-img src="/seba.jpg" width="250" alt="Foto de seba" style="margin:0 auto;border-radius:50%"/>
    </v-col>
    <v-col cols="12" sm="8" md="4" class="mt-2">
      <div style="max-width=350px;background-color:#424242;color:#fff;padding:1em 0" class="elevation-5">
        <h2 class="title text-center">
          {{ $t('home.presentation') }}
          <br />
          {{ $t('home.job') }}
        </h2>
      </div>
    </v-col>
    <v-col cols="12" class="mt-2" style="text-align:center; font-size:1.3rem">
      <strong>Mi stack: </strong>
      <div class="stack">
        <h2 class="caption">Javascript</h2>
        <i class="mdi mdi-vuejs"></i> Vue | <i class="mdi mdi-react"></i> React
        | <br />
        <i class="mdi mdi-nodejs"></i> Nodejs |
        <i class="mdi mdi-database"></i> Postgres
        <p>Entre Vue y React prefiero mas el primero</p>
      </div>
    </v-col>
    <v-cols cols="12" class="font-weight-regular">
      <p class="ma-4 pl-2" style="border-left: 3px solid purple">
        <i>
          {{ $t('home.presentation2') }}
        </i>
      </p>
      <v-alert
        :value="true"
        color="primary"
        class="text-center font-weight-bold"
        dark
      >
        {{ $t('home.internetMessage') }}
      </v-alert>
    </v-cols>
    <v-col cols="12">
      <h3 class="title text-center">Mis últimos proyectos</h3>      
    </v-col>
    <v-row justify="space-around" align="start">
      <v-col cols="12" md="5">
        <h2 class="header mt-4">Reversi Game</h2>
        <p>Un juego desarrollado con React/Redux testeado con Jest y Enzyme.</p>
        <p><a href="https://reversi-game.sebastiancardoso92.now.sh">Ver juego aqui</a></p>
        <p></p>
        <v-img src="/reversi1.jpg" alt="Reversi-Game" style="margin:0 auto;max-width:320px" />
      </v-col>
      <v-col cols="12" md="5">
        <h2 class="header mt-4">Geounity</h2>
        <p>Una aplicación web desarrollada con <strong>Vue/Vuex/Nuxt</strong>. La app se comunica con una API construida con <strong>Node</strong>, Express y Sequelize. La API interactúa con una base de datos construida con <strong>Postgres</strong>.</p>
        <p><a href="https://geounity.org">Geounity.org</a></p>
        <p></p>
        <v-img src="/geounity1.png" alt="Reversi-Game" style="margin:0 auto;max-width:350px" />
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped>
.stack {
  text-align: center;
}
.stack i {
  font-size: 24px;
}
.stack p {
  font-size: 7px;
}
</style>
