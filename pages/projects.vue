<template>
  <v-layout justify-center wrap row>
    <v-flex xs11 sm10 md9 lg7 xl6>
      <v-container>
        <v-row justify="space-around" align="start">
          <v-col cols="12" md="5">
            <h2 class="header mt-4">Reversi Game</h2>
            <p>{{ $t('projects.reversi.description') }}</p>
            <p><a href="https://reversi-game.sebastiancardoso92.now.sh">Reversi Game</a></p>
            <p></p>
            <v-img src="/reversi1.jpg" alt="Reversi-Game" style="margin:0 auto;max-width:320px" />
          </v-col>
          <v-col cols="12" md="5">
            <h2 class="header mt-4">Geounity</h2>
            <p>{{ $t('projects.geounity.description') }}</p>
            <p><a href="https://geounity.org">Geounity.org</a></p>
            <p></p>
            <v-img src="/geounity1.png" alt="Reversi-Game" style="margin:0 auto;max-width:350px" />
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>
