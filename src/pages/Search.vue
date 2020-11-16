<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in searchResults"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
    <!-- <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="baseurl"
          :currentPage="searchResults.pageInfo.currentPage"
          :totalPages="searchResults.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="searchResults.pageInfo.totalPages > 1"
        />
      </div> -->
    {{ searchResults }}
  </Layout>
</template>

<script>
import PostListItem from "~/components/PostListItem.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  metaInfo: {
    title: "Search",
  },
  data: () => ({
    q: "the",
  }),
  computed: {
    searchResults() {
      const searchTerm = this.q;
      if (searchTerm.length < 3) return [];
      return this.$search.search({ query: searchTerm, limit: 5 });
    },
  },
  mounted() {
    this.q = new URL(location.href).searchParams.get("query");
  },
  components: {
    PostListItem,
    Pagination,
  },
};
</script>
