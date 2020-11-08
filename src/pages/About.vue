<template>
  <Layout :hideHeader="false" :disableScroll="true">

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">

      <VacationCard
        img="/img/garden.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="
              - Relaxing All-Inclusive Resort in Cancun
              - Test
              "
        pricing="$299 USD per night"
        url="/vacations/cancun"
      />
      <vue-markdown>
# This is markdown
### Hello world!
      </vue-markdown>
    </div>
</Layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  metaInfo: {
    title: "About us"
  },

  components: {
    VueMarkdown
  }
};
</script>
