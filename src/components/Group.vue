<template>
        <section class="py-12 px-4 text-center">
  <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">{{title}}</h2>
  
  <p class="max-w-xl mx-auto mb-12 text-gray-400">{{description}}</p>
       <div class="flex max-w-lg mb-12 mx-auto text-center border-b-2">
  
    <div v-for="(tag, index) in tags" :key="tag" class="w-1/3 pb-2">
      <button @click="setSelected('')" v-if="index == 0" class="w-1/3 pb-2 border-b-4 border-indigo-600">{{ tag }}</button>
       <button @click="setSelected(tag)" v-if="index != 0" class="hover:text-indigo-600">{{ tag }}</button>
    </div>

  </div>
  <div class="flex flex-wrap -mx-4">
    <div  v-for="obj in filter(selected)" :key="obj.id" class="w-1/2 lg:w-1/4 p-4">
    <g-link :to="obj.path" class="post-card-image-link">
    <g-image
        :src="obj.image"
        :alt="obj.name"
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
    filter: Function
  },
  methods: {
    setSelected: function(tag){
      this.selected = tag
    }
  },
}
</script>