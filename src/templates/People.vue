<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <Group title="THREEFOLD TEAM" description="The heartbeat behind the ThreeFold Movement." :objects="$page.entries.edges" :tags="$page.memberships.edges" tagsField="memberships" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($private: Int){
  entries: allPerson (sortBy: "rank", order: DESC, filter: { private: { ne: $private }}){
    totalCount
    edges {
      node {
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

  memberships: allMembership{
     edges{
      node{
        id
        title
        path
      }
    }
  }
}

</page-query>

<script>
import Pagination from "~/components/Pagination.vue";
import Group from '~/components/Group.vue';

export default {
  metaInfo: {
    title: "People"
  },
  components: {
    Group,
    Pagination
  },
  computed: {
    baseurl: function() {
     return "/people/"
    }
  },
};
</script>
