<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query ($private: Int){
  entries: allProject (sortBy: "rank", order: DESC, filter: { private: { ne: $private }}){
    totalCount
    edges {
      node {
        title
        path
        members {
          id
          name
          image(width:64, height:64, fit:inside)
          path
        },
        tags {
          id
          title
          path
        }  
        rank
        linkedin
        startDate : startdate(format:"MM YYYY")
        humanTime : created(format:"DD MMMM YYYY")
        datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
        status
        excerpt
        image(width:800)
        path
        timeToRead
       
      }
    }
  }
}

</page-query>

<script>
import PostListItem from '~/components/PostListItem.vue';
import Pagination from "~/components/Pagination.vue";

export default {
  metaInfo: {
    title: "Projects"
  },
  components: {
    PostListItem,
    Pagination
  },
  computed: {
    baseurl: function() {
     return "/projects/"
    }
  },
};
</script>
