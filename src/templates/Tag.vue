<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="mx-4 sm:mx-0">
        <h1 class="pb-0 mb-0 text-5xl font-medium">{{ tags.title }}</h1>
        <p class="text-gray-700 text-xl">
          <span
            class="self-center"
          >{{ tags.belongsTo.totalCount }} {{item}}</span>
        </p>
      </div>

      <div class="pt-8 border-b"></div>

      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in tags.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="tags.path"
          :currentPage="tags.belongsTo.pageInfo.currentPage"
          :totalPages="tags.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="tags.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    projectTag(id: $id) {
      title
      path
      belongsTo{
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Blog {
              title
              excerpt
              image(width:800)
              path
              timeToRead
              humanTime : created(format:"DD MMM YYYY")
              datetime : created
              author {
                id
                name
                image(width:64, height:64, fit:inside)
                path
              }
            },
            ... on Project {
              title
              excerpt
              image(width:800)
              path
              humanTime : startdate(format:"DD MMM YYYY")
              datetime : created
              
            }
          }
        }
      }
    }

    newsTag(id: $id) {
      title
      path
      belongsTo{
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on News {
              title
              excerpt
              image(width:800)
              path
              timeToRead
              humanTime : created(format:"DD MMM YYYY")
              datetime : created
              author {
                id
                name
                image(width:64, height:64, fit:inside)
                path
              }
            },
            ... on Project {
              title
              excerpt
              image(width:800)
              path
              humanTime : startdate(format:"DD MMM YYYY")
              datetime : created
              
            }
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
  components: {
    Pagination,
    PostListItem
  },

  computed:{
    tags(){
      return this.$page.projectTag || this.$page.newsTag
    },
    item(){
      var plural = this.tags.belongsTo.totalCount > 0
      return this.$page.projectTag? plural? "projects" : "project" : "news"
    }

  },
 
  metaInfo() {
    return {
      title: this.tags.title
    };
  }
};
</script>
