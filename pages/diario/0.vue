<template lang="md">
  <div v-html="hello"></div>
</template>

<script>
import hello from '~/daily/0.md'
export default {
  name: 'Daily',
  // async asyncData ({params, app}) {
  //   const fileContent = await import(`~/daily/${params.slug}.md`)
  // },
  computed: {
    hello() {
      return hello
    }
  },
  head() {
    return {
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