<template>
  <section class="py-4">
    <div class="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16"
      >
        <div class="md:flex-shrink-0">
          <g-link :to="section.url">
            <g-image :src="img(section.image)" />
          </g-link>
        </div>
        <blockquote class="mt-8 md:flex-grow md:flex md:flex-col">
          <div
            class="relative text-lg leading-7 font-medium text-gray-700 md:flex-grow"
          >
            <svg
              class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-green-200"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path
                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
              />
            </svg>
            <div class="text-gray-700 relative" v-html="section.content"></div>
          </div>
          <footer class="mt-8">
            <div class="flex">
              <div
                class="flex-shrink-0 inline-flex rounded-full border-2 border-white"
              >
                <g-link :to="section.urlperson">
                  <g-image
                    class="h-12 w-12 rounded-full"
                    :src="img(section.imageperson)"
                  />
                </g-link>
                <!-- <img
                  class="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> -->
              </div>
              <div class="ml-4">
                <div class="text-base leading-6 font-medium text-gray-900">
                  {{ section.name }}
                </div>
                <div class="text-base leading-6 font-medium text-gray-900">
                  {{ section.company }}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["sections"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>
<style scoped>
blockquote {
  border-left-color: #c2f5c5;
}
</style>

