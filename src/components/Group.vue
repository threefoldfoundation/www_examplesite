<template>
        <section class="py-12 px-4 text-center">
  <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">{{title}}</h2>
  
  <p class="max-w-xl mx-auto mb-12 text-gray-400">{{description}}</p>
       <div class="flex max-w-lg mb-12 mx-auto text-center border-b-2">
  
    <div v-for="(tag, index) in tags" :key="tag.node.id" class="w-1/3 pb-2">
    <button @click="setSelected('')" v-if="index == 0" class="w-1/3 pb-2 border-b-4 border-indigo-600">All</button>
      <button @click="setSelected(tag.node.title)" v-if="index == 0" class="w-1/3 pb-2 border-b-4 border-indigo-600">{{ tag.node.title }}</button>
       <button @click="setSelected(tag.node.title)" v-if="index != 0" class="hover:text-indigo-600">{{ tag.node.title }}</button>
    </div>

  </div>
  <div class="flex flex-wrap -mx-4">
    <div  v-for="obj in filter(selected)" :key="obj.node.id" class="w-1/2 lg:w-1/4 p-4">
    <g-link :to="obj.node.path" class="post-card-image-link">
    <g-image
        :src="obj.node.image"
        :alt="obj.node.name"
        class="w-1/2 mx-auto mb-4 rounded-full"
      ></g-image>
    </g-link>
      <h3 class="text-xl mb-1 font-semibold font-heading font-semibold">{{ obj.name }}</h3>
      <!-- <span>{{ edge.node.title }}</span> -->
    </div> 
  </div>
</section>


</template>

<script>
export default {
  data() {
    return {
      selected: "",
     
    }
  },

  props: {
    title: String,
    description: String,
    objects: {},
    tags: {},
    tagsField: String,
  },
  methods: {
    setSelected: function(tag){
      this.selected = tag
    },

    filter: function(tag){
      if (tag == '')
        return this.objects
      
      var result = []

      for(var i=0; i < this.objects.length; i++){
          var obj = this.objects[i].node;
          for (var j=0; j<obj[this.tagsField].length; j++){
            var membership = obj[this.tagsField][j];
            if (membership.title == tag){
              result.push(this.objects[i]);
              break
            }
          }
      }
      return result;
    },
  },
}
</script>