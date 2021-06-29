<template>
  <Layout>
    <div class="container-fluid sm:pxi-0">
      <SlickCarousel :slides="$page.markdownPage.carousel"></SlickCarousel>
    </div>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <Header
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$url($page.markdownPage.link)"
      />

      <SolutionsHeader
        v-if="$page.markdownPage.header"
        :header="$page.markdownPage.header"
      />

      <NewCard
        v-for="card in $page.markdownPage.cards"
        :key="card.id"
        :card="card"
      />

      <CallToAction
        v-if="$page.markdownPage.cta"
        :cta="$page.markdownPage.cta"
      />

      <logoShowcase
        v-if="$page.markdownPage.logos.length > 0"
        :logos="$page.markdownPage.logos"
      />

      <Testimonials
        v-if="$page.markdownPage.testimonialsSecs"
        :sections="$page.markdownPage.testimonialsSecs"
      />

      <InTheNews
        v-if="$page.markdownPage.inTheNews"
        :news="$page.markdownPage.inTheNews"
      />

      <SignUp
        v-if="$page.markdownPage.signup"
        :signup="$page.markdownPage.signup"
      />

      <CenteredAccordion
        v-if="$page.markdownPage.faqContent"
        :main="$page.markdownPage.faqMain"
        :faqs="$page.markdownPage.faqContent"
      />
    </div>
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        header_title
        header_image
        header_excerpt
        header_altImg
        button
        link
        header{
         title
         subtitle
         content
         btn1
         link1
         btn2
         link2
        }
        cards{
          id
          title
          image
          button
          link
          order
          content
        }
        cta{
          id
          title
          content
          button
          link
        }
        logos{
          id
          image
          url
        }
        inTheNews {
          id
          excerpt
          partners {
            path
            logo
          }
        }
        signup{
          id
          title
          button1
          link1
          button2
          link2
        }
        testimonialsSecs{
          id
          image
          content
          url
          company
          name
          imageperson 
          urlperson 
        }
        faqMain{
          id
          title
        }
        faqContent{
          id
          question
          content
        }
        carousel {
          id
          img
          content
        }
    }  
  }

</page-query>

<script>
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import InTheNews from "~/components/marketing/sections/logo-clouds/off_white_grid.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";
import Testimonials from "~/components/marketing/sections/cta-sections/Testimonials.vue";
import CenteredAccordion from "~/components/marketing/sections/faq-sections/CenteredAccordion.vue";
import SlickCarousel from "~/components/custom/SlickCarousel.vue";

export default {
  components: {
    Header,
    SolutionsHeader,
    NewCard,
    CallToAction,
    logoShowcase,
    InTheNews,
    SignUp,
    Testimonials,
    CenteredAccordion,
    SlickCarousel,
  },
  metaInfo: {
    title: "",
    titleTemplate: "examplesite",
  },
};
</script>