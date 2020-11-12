<template>
  <Layout :hideHeader="true" :disableScroll="true">

    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
       <h2 class="text-center">The Alliance for a Conscious Internet</h2>
      <p class="text-center py-5">A planetary movement of people and organisations that take action now to shape a conscious digital <br> that empowers everyone equally, across borders.</p>
      <VacationCard
        img="/img/aci-banner-big.png"
        imgAlt="Beach in Cancun"
        eyebrow=""
        title=""
        pricing=""
        url=""
      />
      
      <div class="flex content-between flex-wrap pt-20 ">
  <div class="w-1/2 p-2">
    <div class="text-center p-2">
      <img class="hand" src="/img/hand.png" alt="">
    </div>
  </div>
  <div class="w-1/2 p-2">
    <div class="text-left p-2 pt-20">
      <p>We aim to empower 1+ Billion people with access to the Internet allowing everyone a chance to exchange value, goods and information for less than $1 per month.

Independent of location, race, gender, religion we leave no one behind so that everyone can deliver services and goods to everyone in all transparency and fairness.

Instead of competing we collaborate with one another to improve our solutions, efficiency, reach, visibility and our service to the planet and humanity.</p>
    </div>
  </div>
  </div>
  <h2 class="text-center p-10">IF NOT US, WHO? IF NOT NOW, WHEN?</h2>

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
<style>
h2{
  margin-top: 5rem;
}
.hand{
  width:70%;
}

</style>


