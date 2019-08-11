<template>
  <v-layout justify-center align-center column>
    <v-flex xs12 sm8 md6>
      <v-avatar size="170">
        <img src="/seba.png" alt="Foto de seba" />
      </v-avatar>
    </v-flex>
    <v-flex>
      <v-card class="text-center" dark>
        <v-card-title class="my-2">
          <h2 class="headline text-center" style="max-width: 350px">
            Hola! Me llamo Sebastian.
            <br />
            Soy desarrollador Web
          </h2>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 class="font-weight-regular">
      <p class="ma-4 pl-2" style="border-left: 3px solid purple">
        <i
          >Aprendí primero en la universidad y mas tarde de forma autodidacta
          aprovechando las herramientas que Internet tiene para ofrecernos.
          Desde tutoriales, artículos, guías, videocursos online, etc.</i
        >
      </p>
      <v-alert
        :value="true"
        color="primary"
        class="text-center font-weight-bold"
        dark
      >
        Internet es la herramienta que necesitamos para unir al mundo.
        Generadora de Consciencia Global. Usemos este poder con gran
        responsabilidad.
      </v-alert>
    </v-flex>
    <v-flex xs12 class="ma-2">
      <p>
        En el universo de los programadores cada uno tiene sus lenguajes y
        herramientas favoritos. En este caso <strong>mi stack: </strong>
      </p>
      <div class="stack">
        <h2 class="caption">Javascript</h2>
        <i class="mdi mdi-vuejs"></i> Vue | <i class="mdi mdi-react"></i> React
        | <i class="mdi mdi-nodejs"></i> Nodejs |
        <i class="mdi mdi-database"></i> Postgres
        <p>Entre Vue y React prefiero mas el primero</p>
      </div>
    </v-flex>
  </v-layout>
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
