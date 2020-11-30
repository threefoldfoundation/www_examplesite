<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem :showtags=true
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

  entries: allNews(sortBy: "created", order: DESC) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        
        tags{
          id
          title
          path
        }
        excerpt
        image(width:800)
        path
        humanTime : created(format:"DD MMM YYYY")
        datetime : created
       
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
    Pagination,
  },
  computed: {
    baseurl: function () {
      return "";
    },
  },
  methods: {
    datefilter(){
      
    } 
  }
};
</script>
