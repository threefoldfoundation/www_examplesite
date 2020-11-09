<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="flex flex-row flex-wrap items-center mx-4 sm:mx-0">
        <div class="w-full md:w-1/6 mx-auto sm:mx-0">
          <g-image
            :src="$page.project.image"
            class="rounded-full bg-gray-200 w-32 h-32 border-4 border-gray-400 mx-auto md:mx-0"
          ></g-image>
        </div>
        <div class="w-full md:w-5/6 text-center md:text-left md:pl-8 lg:pl-0">
          <h1 class="pb-0 mb-0 mt-0 text-4xl font-medium">{{ $page.project.title }}</h1>
          <p class="text-gray-700 text-xl" v-if="$page.project.bio">{{ $page.project.bio }}</p>
          <div class="author-social">
            {{ $page.project.belongsTo.totalCount }} Projects
            &nbsp;&middot;&nbsp;
            <!-- <a
              :href="$page.project.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-black"
            >
              <font-awesome :icon="['fab', 'facebook']" />
            </a>
            &nbsp;
            <a
              :href="$page.project.twitter"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-black"
            >
              <font-awesome :icon="['fab', 'twitter']" />
            </a>
            &nbsp; -->
            <a
              :href="$page.project.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-black"
            >
              <font-awesome :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </div>
      </div>

      <div class="pt-8 border-b mx-4 sm:-mx-4"></div>

        <section class="post-content container mx-auto relative font-serif text-gray-700">
          <div class="post-content-text text-xl" v-html="$page.project.content"></div>
        </section>


      <div class="pt-8 border-b mx-4 sm:-mx-4"></div>

      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.project.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          :baseUrl="$page.project.path"
          :currentPage="$page.project.belongsTo.pageInfo.currentPage"
          :totalPages="$page.project.belongsTo.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.project.belongsTo.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page:Int) {
    project(id: $id) {
      id
      title
      status
      countries
      image(width:150, height:150)
      image_caption
      logo
      cities
      timeToRead
      path
      timeToRead
      tags {
        id
        title
        path
      }
     
    
      members
      websites
      private
      
      rank
      excerpt
      content
      belongsTo(perPage: 5, page: $page) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Person {
              name
            }
          }
        }
      }
    }  
  }
</page-query>

<script>
import ProjectListItem from "~/components/ProjectListItem.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    Pagination,
    ProjectListItem
  },
  computed: {
    postLabel: function() {
      var pluralize = require("pluralize");
      return pluralize("post", this.$page.project.belongsTo.totalCount);
    }
  },
  metaInfo() {
    return {
      title: this.$page.project.title
    };
  }
};
</script>
