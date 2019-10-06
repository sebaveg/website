<template>
  <main>
    <v-row justify="center" align="center" class="presentation-background">
      <v-col cols="9" sm="8" md="3" class="mt-2">
        <v-hover>
          <template v-slot="{hover}">
            <v-img src="/seba.jpg" width="250" alt="Foto de seba" style="margin:0 auto;border-radius:50%" class="transition-swing" :class="`elevation-${hover?24:6}`"/>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="8" md="4" class="mt-2" style="position:relative" >
        <v-hover style="margin:0 auto">
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
    <v-container>
      <v-row justify="center">
        <v-cols cols="11" md="7">
          <v-alert
            :value="true"
            color="primary"
            class="text-center font-weight-bold mt-5 mx-1 elevation-5"
            dark
          >
            {{ $t('home.internetMessage') }}
          </v-alert>
        </v-cols>
      </v-row>
      <!-- Mis proyectos -->
      <v-row justify="center">
        <v-col cols="12">
          <h3 class="display-1 font-weight-bold text-center mt-3">{{$t('home.titleProjects')}}</h3>
        </v-col>
      </v-row>
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
      <v-row justify="center">
        <h3 class="display-1 font-weight-bold text-center my-3">{{$t('home.skills')}}</h3>
      </v-row>
      <v-row justify="center">
        <v-col cols="3" md="2" class="text-center">
          <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
            <img src="/skills/html.png" />
          </a>
        </v-col>
        <v-col cols="3" md="2" class="text-center">
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">
            <img src="/skills/css.png" />
          </a>
        </v-col>
        <v-col cols="3" md="2" class="text-center">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <img src="/skills/js.png" />
          </a>
        </v-col>
        <v-col cols="3" md="2" class="text-center">
          <a href="https://nodejs.org/en/">
            <img src="/skills/node.png" />
          </a>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="3" md="2" class="text-center">
          <a href="https://vuejs.org/">
            <img src="/skills/vue.png" />
          </a>
        </v-col>
        <v-col cols="3" md="2" class="text-center">
          <a href="https://facebook.github.io/react/">
            <img src="/skills/react.png" />
          </a>
        </v-col>
        <v-col cols="3" md="2" class="text-center">
          <a href="https://git-scm.com/">
            <img src="/skills/git.png" />
          </a>
        </v-col>
        <v-col cols="3" md="2" class="text-center">
          <a href="http://sass-lang.com/">
            <img src="/skills/sass.png" />
          </a>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="11" md="7">
          <p class="ma-4 pl-2" style="border-left: 3px solid purple">
            <i>
              {{ $t('home.presentation2') }}
            </i>
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-btn href="https://platzi.com/@sebaveg/" justify="center" color="info" outlined>{{$t('home.certificates')}}</v-btn>
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
  min-height: 40vh;
}
.presentation-background:before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../static/computers.jpg');
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
