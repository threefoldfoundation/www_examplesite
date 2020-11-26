<template>
  <section class="py-12 px-4 text-center">
    <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">
      {{ title }}
    </h2>

    <p class="max-w-xl mx-auto mb-12 text-gray-400">{{ description }}</p>
    <div class="flex max-w-lg mx-auto mb-12 justify-center border-b-2">
      <div v-for="(tag, index) in tags" :key="tag" class="w-1/3 mr-5 pb-2">
        <button
          @click="setSelected('', index)"
          v-if="index == 0"
          class="pb-2 hover:text-indigo-600 capitalize"
          :class="{ 'border-b-4 border-indigo-600': activeIndex == index }"
        >
          All
        </button>
        <button
          @click="setSelected(tag, index)"
          v-if="index != 0"
          class="pb-2 hover:text-indigo-600 capitalize"
          :class="{ 'border-b-4 border-indigo-600': activeIndex == index }"
        >
          {{ tag.replace("_", " ") }}
        </button>
      </div>
    </div>
    <div class="flex flex-wrap -mx-4 transition-all ease-in-out duration-150">
      <div
        v-for="obj in filter(selected)"
        :key="obj.id"
        class="w-1/2 lg:w-1/4 p-4"
      >
        <g-link :to="obj.path" class="post-card-image-link">
          <g-image
            :src="obj.image"
            :alt="obj.name"
            class="w-1/2 mx-auto mb-4 rounded-full"
          ></g-image>
        </g-link>
        <h3 class="text-xl mb-1 font-semibold font-heading font-semibold">
          {{ obj.name }}
        </h3>
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
      activeIndex: 0,
    };
  },

  props: {
    title: String,
    description: String,
    objects: {},
    tags: {},
    filter: Function,
  },
  methods: {
    setSelected: function (tag, index) {
      this.selected = tag;
      this.activeIndex = index;
    },
  },
};
</script>