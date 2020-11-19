<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.entries.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
    </div>
     <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="baseurl"
          :currentPage="$page.entries.pageInfo.currentPage"
          :totalPages="$page.entries.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.entries.pageInfo.totalPages > 1"
        />
      </div>
  </Layout>
</template>

<page-query>

query{

  entries: allBlog(sortBy: "created", order: DESC) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        excerpt
        image(width:800)
        path
        humanTime : created(format:"DD MMM YYYY")
        datetime : created
        author {
          id
          name
          image(width:64, height:64, fit:inside)
          path
        }
      }
    }
  }
}

</page-query>

<script>
import PostListItem from "~/components/PostListItem.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    PostListItem,
    Pagination
  },
  computed: {
    baseurl: function() {
     return ""
    }
  },
};
</script>
