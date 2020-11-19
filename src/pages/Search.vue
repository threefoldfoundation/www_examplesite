<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden my-auto">
      <div
        v-if="searchResults.length > 0"
        class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4"
      >
        <PostListItem
          v-for="edge in searchResults"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
      <div v-else class="flex flex-col with-large my-auto text-center">
        <h1>404</h1>
        <p>OOPS! Something went wrong here</p>
      </div>
    </div>
  </Layout>
</template>
<page-query>

query {
  projects: allProject {   
    edges {
        node {
                id
          title
          path
          members {
            id
          name
          image(width:64, height:64, fit:inside)
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
        author {
          id
          
          image(width:64, height:64, fit:inside)
          path
        }
      }
    }
  }

  people: allPerson {   
     edges {
      node {
        id
        path
        excerpt
        content
        name
        rank
         memberships{
          id
          title
          path
        }
        bio
        linkedin
        websites
        countries
        cities
        image(width:800)
        private
      }
    }
  }

  blogs: allBlog {
    edges {
      node {
        id
        title
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
    title: "Search",
  },
  data: () => ({
    q: "",
    objects: {},
  }),
  computed: {
    searchResults() {
      const searchTerm = this.q;
      if (searchTerm.length < 3) return [];
      var searchRes = this.$search.search({ query: searchTerm, limit: 5 });
      var result = [];
      for (var i = 0; i < searchRes.length; i++) {
        var item = searchRes[i];
        result.push({ node: this.objects[item.path] });
      }
      return result;
    },
  },
  mounted() {
    this.q = new URL(location.href).searchParams.get("query");

    for (var i = 0; i < this.$page.projects.edges.length; i++) {
      var item = this.$page.projects.edges[i];
      this.objects[item.node.path] = item.node;
    }

    for (var i = 0; i < this.$page.people.edges.length; i++) {
      var item = this.$page.people.edges[i];
      this.objects[item.node.path] = item.node;
    }

    for (var i = 0; i < this.$page.blogs.edges.length; i++) {
      var item = this.$page.blogs.edges[i];
      this.objects[item.node.path] = item.node;
    }
  },
  components: {
    PostListItem,
    Pagination,
  },
};
</script>

<style scoped>
  h1 {
    font-size: 13rem;;
  }
</style>
