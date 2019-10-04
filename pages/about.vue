<template>
  <v-layout justify-center wrap row>
    <v-flex xs11 sm10 md9 lg7 xl6>
      <section>
        <h2 class="display-2 font-wieght-bold my-5 text-center">Conoceme un poco mas ✌️</h2>
        <p>
          Mi nombre es Sebastian Cardoso Castillo, tengo 27 años, nací en
          Montevideo, Uruguay y vivo en Buenos Aires, Argentina hace 23 años.
        </p>
        <p>
          Me apasiona el cambio que la era digital esta produciendo hoy en día.
          Quiero crear aplicaciones que aporten valor a la humanidad para que
          todos podamos vivir mejor.
        </p>
        <p>
          Además de crear tecnología me apasiona el desarrollo personal. Busco
          crecer los cuatro pilares básicos de la vida:
        </p>
        <ul>
          <li> Salud </li>
          <li> Riqueza personal </li>
          <li> Relaciones sociales </li>
          <li> Espiritualidad. </li>
        </ul>
        <div class="text-center">
          <v-btn color="primary" class="mt-5  " nuxt to="/"
            >Volver al inicio</v-btn
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
