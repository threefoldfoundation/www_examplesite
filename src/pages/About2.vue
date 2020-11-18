<template>
  <Layout :hideHeader="true" :disableScroll="true">

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
       
      <VacationCard
        img="/img/Homepage.jpg"
        imgAlt="Beach in Cancun"
        eyebrow=""
        title=""
        pricing=""
        url=""
      />
      <div class="center py-10">
      <h2 class="text-center">CO-CREATING BETTER FUTURES TOGETHER</h2>
      <!-- <p class="text-center py-1">The ThreeFold Foundation is not ThreeFold — rather, it is sparking a movement to bring the world <br> a truly peer-to-peer internet. We acknowledge and support the many people and organizations around the world <br>  who bring crucial support to the growth and adoption of the ThreeFold Grid.</p> -->
      </div>

      <vue-markdown>
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
<style scoped>
/* h2 {
  padding-bottom: 8rem;
} */
</style> >




