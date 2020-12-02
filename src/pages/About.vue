<template>
  <Layout :hiddenHeader="true" :disableScroll="true">
    <div
      class="container sm:pxi-0 mx-auto overflow-x-hidden"
      :style="{ 'min-height': contentHeight + 'px' }"
    >
      <VerticalNav :slides="getNode" />
    </div>
  </Layout>
</template>

<script>
import VerticalNav from "~/components/VerticalNav.vue";
export default {
  metaInfo: {
    title: "About us",
  },
  computed: {
    contentHeight() {
      if (process.isClient) {
        return window.innerHeight - 130;
      }
    },
    getNode() {
      let result = [];
      for (const edge of this.$page.entries.edges) {
        result.push(edge.node);
      }
      return result;
    },
  },
  components: {
    VerticalNav,
  },
};
</script>
<page-query>
query {
  entries: allSlides ( sortBy: "rank"){
    edges {
      node {
        rank
        id
        title
        img
        content 
      }
    }
  }
}
</page-query>
<style scoped>
.hand {
  width: 70%;
}
</style>


