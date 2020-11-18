<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="mx-4 sm:mx-0">
        <h1 class="pb-0 mb-0 text-5xl font-medium">{{ $page.membership.title }}</h1>
        <p class="text-gray-700 text-xl">
          A collection of
          <span
            class="self-center"
          >{{ $page.membership.belongsTo.totalCount }} items</span>
        </p>
      </div>

      <div class="pt-8 border-b"></div>

      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.membership.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.membership.path"
          :currentPage="$page.membership.belongsTo.pageInfo.currentPage"
          :totalPages="$page.membership.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.membership.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    membership(id: $id) {
      title
      path
      belongsTo(perPage: 10, page: $page) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Person {
               path
              content
              name
              rank
              memberships{
                id
                title
                path
              }
              bio
              excerpt
              linkedin
              websites
              countries
              cities
              private
              image(width:150, height:150)
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
 
  metaInfo() {
    return {
      title: this.$page.membership.title
    };
  }
};
</script>
