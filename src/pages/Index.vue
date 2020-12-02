<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-hidden">
      <!-- <VacationCard img="" imgAlt="" eyebrow="" title="" pricing="" url="" /> -->
            <Header
        v-for="header in headers"
        :key="header.title"
        :header="header"
      />
      <!-- <div class="py-10 flex flex-col">
        <section class="py-10">
          <div class="flex flex-wrap items-center -mx-8">
            <div class="md:ml-auto md:w-1/2 md:pl-20 px-10">
              <h2 class="text-4xl font-bold font-tf-secondary">
                Welcome to the growing ecosystem of ThreeFold
              </h2>
              <p class="text-gray-600 leading-relaxed">Welcome to the growing ecosystem of ThreeFold</p>
            </div>
            <div class="md:ml-auto md:w-1/2 pl-8">
              <img class="object-cover" src="img/equality.png" alt="imgAlt" />
            </div>
          </div>
        </section>
      </div> -->

      <!-- <section class="py-5 m-5 px-0 shadow-xl border border-gray-300">
          <div class="flex flex-wrap items-center -mx-8">
            <div class="md:ml-auto md:w-1/3 pl-8">
              <img
                src="img/projects_card.png"
                alt="imgAlt"
                class="object-cover"
              />
            </div>
            <div class="md:ml-auto md:w-2/3 md:pl-10 px-20 text-left">
              <h2 class="text-4xl font-semibold font-tf-secondary uppercase">
                Projects
              </h2>
              <p class="mt-6 mb-8 leading-relaxed">
                Organisations that take action now to shape a conscious digital
                world.
              </p>
              <div
                class="flex ml-52 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <a href="/projects"
                  ><svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 430.04 315.72"
                    class="inline-block fill-current text-green-600 h-5 w-5 mt-3"
                  >
                    <title>Arrows</title>
                    <path
                      d="M46.17,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L274.84,244.54a14.64,14.64,0,0,1,3.74,11,14.24,14.24,0,0,1-3.74,8.19L149.26,402.36a17.41,17.41,0,0,1-19.78,9.14l-83.7.5c-.48-.14-8.05-2.47-10.24-10.14a15.37,15.37,0,0,1,2.22-12.61L159,254.1,36.28,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,46.17,96.56Z"
                      transform="translate(-35 -96.28)"
                      class="cls-1"
                    ></path>
                    <path
                      d="M232.57,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L461.24,244.54a14.69,14.69,0,0,1,3.73,11,14.25,14.25,0,0,1-3.73,8.19L335.65,402.36a17.39,17.39,0,0,1-19.77,9.14l-83.71.5c-.47-.14-8-2.47-10.23-10.14a15.37,15.37,0,0,1,2.22-12.61L345.39,254.1,222.68,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,232.57,96.56Z"
                      transform="translate(-35 -96.28)"
                      class="cls-1"
                    ></path></svg
                ></a>
                <a
                  href="/projects"
                  class="inline-block text-green-600 hover:underline py-2 ml-2 uppercase text-right font-bold"
                  >LEARN MORE</a
                >
              </div>
            </div>
          </div>
        </section> -->

      <!-- <vue-markdown> </vue-markdown> -->
      <NewCard v-for="card in cards" :key="card.title" :card="card" />


    </div>
  </Layout>
</template>

<script>
import VueMarkdown from "vue-markdown";
import NewCard from "~/components/NewCard.vue";
import Header from "~/components/Header.vue";

export default {
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      cards: [
        {
          title: "PROJECTS",
          content:
            "Organisations that take action now to shape a conscious digital world.",
          img: "background-image:url('https://fakeimg.pl/640x360')",
          button: "Learn More",
          link: "/projects",
        },
        {
          title: "PEOPLE",
          content:
            "Independent of location, race, gender, religion we leave no one behind.",
          img: "background-image:url('https://fakeimg.pl/640x360')",
          button: "Learn More",
          link: "/people",
        },
        {
          title: "BLOG",
          content:
            "We collaborate to improve our solutions, efficiency, reach, visibility and service.",
          img: "background-image:url('https://fakeimg.pl/640x360')",
          button: "Learn More",
          link: "/blog",
        },
      ],
      headers: [
        {
          title: "THANK YOU THREEFOLD MEMBERS",
          img: "img/equality.png",
          altImg :"home",
          content:"Welcome to the growing ecosystem of ThreeFold.",
        },
      ],
    };
  },
  computed: {
    contentHeight() {
      if (process.isClient) {
        return window.innerHeight - 50;
      }
    },
  },
  components: {
    VueMarkdown,
    NewCard,
    Header,
  },
};
</script>
