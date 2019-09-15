<template>
  <main>
    <v-row justify="center" align="center" class="presentation-background">
      <v-col cols="12" sm="8" md="3" class="mt-2">
        <v-hover>
          <template v-slot="{hover}">
            <v-img src="/seba.jpg" width="250" alt="Foto de seba" style="margin:0 auto;border-radius:50%" class="transition-swing" :class="`elevation-${hover?24:6}`"/>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="8" md="4" class="mt-2" style="position:relative">
        <v-hover>
          <template v-slot="{hover}">
            <div class="presentation transition-swing" :class="`elevation-${hover?24:6}`">
              <h2 class="title text-center">
                {{ $t('home.presentation') }}
                <br />
                {{ $t('home.job') }}
              </h2>
            </div>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-col cols="12" class="mt-2" style="text-align:center; font-size:1.3rem">
      <div class="stack">
        <i class="mdi mdi-vuejs"></i> Vue | Vuex | <i class="mdi mdi-nuxt"></i> Nuxt <br />
        <i class="mdi mdi-react"></i> React | Redux | Next | React-Native<br/>
        <i class="mdi mdi-nodejs"></i> Nodejs |
        <i class="mdi mdi-database"></i> Postgres
      </div>
    </v-col>
    <v-container>
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
    </v-container>
  </main>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped>
.presentation{
  max-width:350px;
  background-color:#424242;
  color:#fff;
  padding:1em 0;
}
.presentation-background{
  position:relative;
}
.presentation-background:before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../../static/computers.jpg');
  background-position: center;
  background-size: cover;
  filter: opacity(50%);
  padding: 2em 0;
}
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
