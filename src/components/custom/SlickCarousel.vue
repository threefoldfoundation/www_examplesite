<template>
  <VueSlickCarousel v-bind="settings">
    <div v-for="(slide, index) in slides" :key="`${slide}-${index}`">
      <img :src="img(slide.img)" class="h-100" />
      <div
        class="text text-base md:text-5xl capitalize font-bold text-gray-600"
        v-html="slide.content"
      ></div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  props: ["slides"],
  data() {
    return {
      settings: {
        dots: true,
        lazyLoad: "ondemand",
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    img(slide) {
      if (!slide) return "";
      if (slide.src) return slide.src;
      return slide;
    },
  },
};
</script>

<style scoped>
img {
  position: relative;
  height: auto;
}

.text {
  position: absolute;
  width: 100%;
  top: 40%;
  text-align: center;
  color: #fff;
}

.slick-dots {
  bottom: 0 !important;
}
.slick-dots li button {
  color: #fff !important;
}
.slick-dots li button:before {
  font-size: 10px !important;
  opacity: 0.75 !important;
  color: #fff !important;
}
</style>

