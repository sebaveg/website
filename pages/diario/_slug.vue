<template>
  <v-row>
    <v-col>
      Fecha de hoy
    </v-col>
    <v-col>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Daily',
  async asyncData ({params, app}) {
    const fileContent = await import(`~/daily/${params.slug}.md`)
    return {
      day: params.slug,
    }
  },
  head() {
    return {
      title: `Dia ${params.slug}`,
      meta: [
        { name: "author", content: "Sebastian Cardoso" }
      ],
    }
  },
  transition: {
    name: 'slide-false'
  }
}
</script>