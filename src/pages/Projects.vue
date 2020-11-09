<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <ProjectListItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query($page:Int) {
  entries: allProject(perPage: 9, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        members
        rank
        
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
}

</page-query>

<script>

import ProjectListItem from '~/components/ProjectListItem.vue';

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    ProjectListItem
  }
};
</script>
