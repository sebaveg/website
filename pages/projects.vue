<template>
  <v-container>
    <v-row justify="space-around" align="center">
      <v-col cols="12" md="5">
        <v-card raised>
          <v-img src="/reversi.png" alt="Reversi-Game" />
          <v-card-title>Reversi Game</v-card-title>
          <v-card-text>
            {{ $t('projects.reversi.description') }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" href="https://reversi-game.sebastiancardoso92.now.sh">
              {{ $t('projects.reversi.link') }}
            </v-btn>
            <v-btn href="https://github.com/sebaveg/Reversi-Game" text>
              <v-icon>mdi-github-circle</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card raised>
          <v-img src="/geounity.png" alt="Reversi-Game" />
          <v-card-title style="border-top:2px solid lightgrey">Geounity</v-card-title>
          <v-card-text>
            {{ $t('projects.geounity.description') }}
          </v-card-text>
          <v-card-actions>
            <v-btn href="https://github.com/sebaveg/Reversi-Game" text>
              <v-icon>mdi-github-circle</v-icon>
            </v-btn>
            <a href="https://geounity.org">Geounity.org</a></v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card raised>
          <v-img src="/podcast.png" alt="Website listen podcast" style="height:500px;width:335px;margin:0 auto"/>
          <v-card-title style="border-top:2px solid lightgrey">
            {{ $t('projects.superPodcast.title') }}
          </v-card-title>
          <v-card-text>
            {{ $t('projects.superPodcast.description') }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" href="https://next-podcasts.sebastiancardoso92.now.sh/">
              {{ $t('projects.superPodcast.description') }}
            </v-btn>
            <v-btn href="https://github.com/sebaveg/lab-next-podcast" text>
              <v-icon>mdi-github-circle</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <h2 class="header mt-4">{{ $t('projects.personalSite.title') }}</h2>
        <p>{{ $t('projects.personalSite.description') }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
