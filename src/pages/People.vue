<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query($page:Int) {
  entries: allPerson(perPage: 60, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        path
        excerpt
        content
        name
        rank
        memberships
        bio
        linkedin
        websites
        project_ids
        countries
        cities
        image(width:800)
        private
      }
    }
  }
}

</page-query>

<script>

import PostListItem from '~/components/PostListItem.vue';

export default {
  metaInfo: {
    title: "People"
  },
  components: {
    PostListItem
  }
};
</script>
