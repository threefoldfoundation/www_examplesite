<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <Group title="THREEFOLD TEAM" description="The heartbeat behind the ThreeFold Movement." :objects="people" :tags="memberships" :filter="filter" />
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
  methods: {
    filter: function(tag){
      if (tag == '')
        return this.people
      
      var result = []
      for(var i=0; i < this.people.length; i++){
          var person = this.people[i];
          for (var j=0; j<person.memberships.length; j++){
            var membership = person.memberships[j];
            if (membership.title == tag){
              result.push(person);
              break
            }
          }
      }
      return result;
    },
  },

  computed: {
    people: function(){
      var result = []
      for (var i=0; i < this.$page.entries.edges.length; i++){
        result.push(this.$page.entries.edges[i].node)
      }
      return result
    },
    memberships: function(){
      var result = []
      for (var i=0; i < this.$page.memberships.edges.length; i++){
        result.push(this.$page.memberships.edges[i].node.title)
      }
      return result
    },

    baseurl: function() {
     return "/people/"
    }
  },
};
</script>
