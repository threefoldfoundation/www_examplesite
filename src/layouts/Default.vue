<template>
  <div id="app" dark>
    <HeaderPartial v-if="hideHeader!=true" @setTheme="setTheme" :theme="this.theme"></HeaderPartial>
    <slot/>
    <NavbarPartial :disableScroll="disableScroll" @setTheme="setTheme" :theme="this.theme"></NavbarPartial>
    <FooterPartial></FooterPartial>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from '~/layouts/partials/HeaderWithNavbar.vue'
import NavbarPartial from '~/layouts/partials/Navbar.vue'
import FooterPartial from '~/layouts/partials/Footer.vue'

export default {
  props: {
    hideHeader: {
      type: Boolean,
      default: true
    },
    disableScroll: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      theme: 'light'
    };
  },
  methods: {
    setTheme(mode) {
        this.theme = mode
    }
  },
  components: {
    HeaderPartial,
    NavbarPartial,
    FooterPartial
  },
  
  metaInfo: {
    bodyAttrs: {
      class: "m-0 pt-12"
    }
  }
}
</script>