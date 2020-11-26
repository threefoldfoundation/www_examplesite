<template>
  <Layout>
    <div
      class="container sm:pxi-0 mx-auto overflow-x-hidden"
      :style="{ 'min-height': contentHeight + 'px' }"
    >
      <div class="flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4">
        <Team
          title="THREEFOLD PROJECTS"
          description="The heartbeat behind the ThreeFold Movement."
          :objects="$page.entries.edges"
          :tags="$page.memberships.edges"
          tagsField="tags"
        />
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

  memberships: allProjectTag{
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
import Team from "~/components/Team.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  metaInfo: {
    title: "Projects",
  },
  components: {
    Team,
    Pagination,
  },
  computed: {
    baseurl: function () {
      return "/projects/";
    },
    contentHeight() {
      if (process.isClient) {
        return window.innerHeight - 100;
      }
    },
  },
};
</script>
