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


    </div>



  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "About us"
  }
};
</script>
