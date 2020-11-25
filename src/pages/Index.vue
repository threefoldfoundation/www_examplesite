<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-hidden">
      <!-- <VacationCard img="" imgAlt="" eyebrow="" title="" pricing="" url="" /> -->
      
      <div class="py-10 flex flex-col">

        <!-- <section class="my-5 pt-10">
            <div class="flex mx-32">
                <div class="flex-1 mx-auto mr-24 py-10 my-auto justify-items-end max-w-2xl text-right">
                    <h2 class="uppercase font-semibold text-gray-700">Be The Internet</h2>
                    <p class="mt-6 mb-8 text-gray-400 leading-relaxed font-tf-primary text-lg">Centralized storage and Compute <br> owned by everyone, everywhere.</p>
                </div>
                <div class="flex-1">
                    <img src="img/valuesheader2.png" alt="globe" class="max-w-2xl">
                </div>
            </div>
        </section> -->

     <section class="py-20">
            <div class="flex flex-wrap items-center -mx-8">
              
              <div class="md:ml-auto md:w-1/2 md:pl-10 px-20 text-center">
                <h1 class="text-4xl font-semibold font-tf-secondary">THANK YOU PARTNERS</h1>
                <p class="mt-6 mb-8 text-gray-600 leading-relaxed">Welcome to the growing ecosystem of ThreeFold</p>
              </div>
              <div class="md:ml-auto md:w-1/2 pl-8">
                <img class="object-cover" src="img/valuesheader2.png" alt="imgAlt"/>
              </div>
            </div>
          </section>   



          <section class="py-5  m-5 px-0 shadow-xl border border-gray-300 ">
            <div class="flex flex-wrap items-center -mx-8">
              <div class="md:ml-auto md:w-1/3 pl-8">
                <img class="object-cover" src="img/projects_card.png" alt="imgAlt"/>
              </div>
              <div class="md:ml-auto md:w-2/3 md:pl-10 px-20 text-left">
                <h2 class="text-4xl font-semibold font-tf-secondary uppercase">Projects</h2>
                <p class="mt-6 mb-8 text-gray-600 leading-relaxed">Organisations that take action now to shape a conscious digital world.</p>
                <div class="flex ml-52 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <a  href="/projects">
                        <svg  class="inline-block fill-current text-green-600 h-5 w-5 mt-3 " data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.04 315.72"><title>Arrows</title><path class="cls-1" d="M46.17,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L274.84,244.54a14.64,14.64,0,0,1,3.74,11,14.24,14.24,0,0,1-3.74,8.19L149.26,402.36a17.41,17.41,0,0,1-19.78,9.14l-83.7.5c-.48-.14-8.05-2.47-10.24-10.14a15.37,15.37,0,0,1,2.22-12.61L159,254.1,36.28,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,46.17,96.56Z" transform="translate(-35 -96.28)"/><path class="cls-1" d="M232.57,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L461.24,244.54a14.69,14.69,0,0,1,3.73,11,14.25,14.25,0,0,1-3.73,8.19L335.65,402.36a17.39,17.39,0,0,1-19.77,9.14l-83.71.5c-.47-.14-8-2.47-10.23-10.14a15.37,15.37,0,0,1,2.22-12.61L345.39,254.1,222.68,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,232.57,96.56Z" transform="translate(-35 -96.28)"/></svg>
                    </a>
                    <a class="inline-block text-green-600 hover:underline py-2 ml-2 uppercase text-right font-bold" href="/projects">LEARN MORE</a>
                </div>

              </div>
            </div>
          </section>
          <section class="py-5  m-5 px-0 shadow-xl border border-gray-300 ">
            <div class="flex flex-wrap items-center -mx-8">
              <div class="md:ml-auto md:w-1/3 pl-8">
                <img class="object-cover" src="img/people.png" alt="imgAlt"/>
              </div>
              <div class="md:ml-auto md:w-2/3 md:pl-10 px-20 text-left">
                <h2 class="text-4xl font-semibold font-tf-secondary uppercase">People</h2>
                <p class="mt-6 mb-8 text-gray-600 leading-relaxed">Independent of location, race, gender, religion we leave no one behind.</p>
                <div class="flex ml-52 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <a  href="/people">
                        <svg  class="inline-block fill-current text-green-600 h-5 w-5 mt-3 " data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.04 315.72"><title>Arrows</title><path class="cls-1" d="M46.17,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L274.84,244.54a14.64,14.64,0,0,1,3.74,11,14.24,14.24,0,0,1-3.74,8.19L149.26,402.36a17.41,17.41,0,0,1-19.78,9.14l-83.7.5c-.48-.14-8.05-2.47-10.24-10.14a15.37,15.37,0,0,1,2.22-12.61L159,254.1,36.28,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,46.17,96.56Z" transform="translate(-35 -96.28)"/><path class="cls-1" d="M232.57,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L461.24,244.54a14.69,14.69,0,0,1,3.73,11,14.25,14.25,0,0,1-3.73,8.19L335.65,402.36a17.39,17.39,0,0,1-19.77,9.14l-83.71.5c-.47-.14-8-2.47-10.23-10.14a15.37,15.37,0,0,1,2.22-12.61L345.39,254.1,222.68,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,232.57,96.56Z" transform="translate(-35 -96.28)"/></svg>
                    </a>
                    <a class="inline-block text-green-600 hover:underline py-2 ml-2 uppercase text-right font-bold" href="/people">LEARN MORE</a>
                </div>

              </div>
            </div>
          </section>
          <section class="py-5  m-5 px-0 shadow-xl border border-gray-300 ">
            <div class="flex flex-wrap items-center -mx-8">
              <div class="md:ml-auto md:w-1/3 pl-8">
                <img class="object-cover" src="img/blog.png" alt="imgAlt"/>
              </div>
              <div class="md:ml-auto md:w-2/3 md:pl-10 px-20 text-left">
                <h2 class="text-4xl font-semibold font-tf-secondary uppercase">Blog</h2>
                <p class="mt-6 mb-8 text-gray-600 leading-relaxed">We collaborate to improve our solutions, efficiency, reach, visibility and service.</p>
                <div class="flex ml-52 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <a  href="/blog">
                        <svg  class="inline-block fill-current text-green-600 h-5 w-5 mt-3 " data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.04 315.72"><title>Arrows</title><path class="cls-1" d="M46.17,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L274.84,244.54a14.64,14.64,0,0,1,3.74,11,14.24,14.24,0,0,1-3.74,8.19L149.26,402.36a17.41,17.41,0,0,1-19.78,9.14l-83.7.5c-.48-.14-8.05-2.47-10.24-10.14a15.37,15.37,0,0,1,2.22-12.61L159,254.1,36.28,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,46.17,96.56Z" transform="translate(-35 -96.28)"/><path class="cls-1" d="M232.57,96.56l84.05,0a18.74,18.74,0,0,1,19.7,9.16L461.24,244.54a14.69,14.69,0,0,1,3.73,11,14.25,14.25,0,0,1-3.73,8.19L335.65,402.36a17.39,17.39,0,0,1-19.77,9.14l-83.71.5c-.47-.14-8-2.47-10.23-10.14a15.37,15.37,0,0,1,2.22-12.61L345.39,254.1,222.68,116.58c-.28-.65-3-7.18.79-13.43A14.9,14.9,0,0,1,232.57,96.56Z" transform="translate(-35 -96.28)"/></svg>
                    </a>
                    <a class="inline-block text-green-600 hover:underline py-2 ml-2 uppercase text-right font-bold" href="/blog">LEARN MORE</a>
                </div>

              </div>
            </div>
          </section>
 </div>

      <!-- <vue-markdown> </vue-markdown> -->
    </div>

 
  </Layout>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  metaInfo: {
    title: "Home",
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
  },
};
</script>




