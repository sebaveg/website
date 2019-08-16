<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="3" class="mt-2" style="border:1px solid red">
      <v-img src="/seba.png" width="200" alt="Foto de seba" style="margin:0 auto;border-radius:50%"/>
    </v-col>
    <v-col cols="12" sm="8" md="4" class="mt-2">
      <div style="max-width=350px;background-color:#424242;color:#fff;padding:1em 0" class="elevation-5">
        <h2 class="title text-center">
          Hola! Me llamo Sebastian.
          <br />
          Soy desarrollador Web
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
    </v-cols>
    <v-col cols="12">
      <h2 class="title text-center">Mi diario</h2>
      
    </v-col>
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
