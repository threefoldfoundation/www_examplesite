<!--<template>
  <div class="fixed inset-0 h-16 bg-black">
    <nav
      class="flex items-center justify-between flex-wrap container mx-auto px-4 sm:px-0 py-4 transition-all transition-500"
      v-bind:class="{
        'opacity-100': !disableScroll && scrollPosition > headerHeight,
        'opacity-0': !disableScroll && scrollPosition < headerHeight,
      }"
    >
      <div class="block flex-grow flex items-center w-auto">
        <div class="inline-flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" class="flex">
            <img
              src="../../../static/img/ACI_icon-01.png"
              class="mr-3"
              width="50"
              alt=""
            />
            <span
              class="hidden md:block font-semibold text-xl tracking-tight"
              >{{ $static.metadata.siteName }}</span
            >
          </a>
        </div>

        <div class="sm:hidden ml-auto">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <div
          :class="isOpen ? 'block' : 'hidden'"
          class="text-sm flex-grow uppercase sm:flex sm:p-0"
        >
          <ul
            class="list-none flex justify-left text-gray-300 uppercase transition-all transition-500"
          >
            <li
              :key="element.name"
              v-for="(element, index) in $static.metadata.navigation"
              class="hover:text-white"
              v-bind:class="{
                'mr-4':
                  index != Object.keys($static.metadata.navigation).length - 1,
              }"
            >
              <a
                :href="element.link"
                v-if="element.external"
                target="_blank"
                rel="noopener noreferrer"
                class="block animated-link"
                >{{ element.name }}</a
              >
              <g-link v-else :to="element.link" class="animated-link">{{
                element.name
              }}</g-link>
            </li>
          </ul>
        </div>

        <div class="inline-block text-gray-400">
          <ul class="list-none flex justify-center md:justify-end">
            <li class="mr-0 sm:mr-6">
              <theme-switcher v-on="$listeners" :theme="theme" />
            </li>
            <li
              :key="element.name"
              v-for="(element, index) in $static.metadata.social"
              class="hover:text-white sm:block"
              v-bind:class="{
                'mr-6':
                  index != Object.keys($static.metadata.social).length - 1,
              }"
            >
              <span class="text-sm">
                <a
                  :href="element.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome :icon="['fab', element.icon]" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template> -->



<template>
  <div class="fixed inset-0 h-16 bg-black">
    <header class="container sm:flex sm:items-center sm:px-4 sm:py-3 mx-auto">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div class="inline-flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" class="flex">
            <img
              src="../../../static/img/ACI_icon-01.png"
              class="mr-3"
              width="50"
              alt=""
            />
            <span
              class="hidden md:block font-semibold text-xl tracking-tight"
              >{{ $static.metadata.siteName }}</span
            >
          </a>
        </div>

        <div class="sm:hidden ml-auto">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <div class="text-gray-400 sm:block md:hidden">
          <ul class="list-none flex justify-center md:justify-end">
            <li class="mr-0 sm:mr-6">
              <theme-switcher v-on="$listeners" :theme="theme" />
            </li>
            <li
              :key="element.name"
              v-for="(element, index) in $static.metadata.social"
              class="hover:text-white sm:block"
              v-bind:class="{
                'mr-6':
                  index != Object.keys($static.metadata.social).length - 1,
              }"
            >
              <span class="text-sm">
                <a
                  :href="element.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome :icon="['fab', element.icon]" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="md:order-2 px-2 pt-2 pb-4 sm:flex sm:p-0 bg-black"
      >
        <ul
          class="list-none sm:flex justify-left text-gray-300 uppercase transition-all transition-500"
        >
          <li
            :key="element.name"
            v-for="(element, index) in $static.metadata.navigation"
            class="hover:text-white"
            v-bind:class="{
              'mr-4':
                index != Object.keys($static.metadata.navigation).length - 1,
            }"
          >
            <a
              :href="element.link"
              v-if="element.external"
              target="_blank"
              rel="noopener noreferrer"
              class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 animated-link"
              >{{ element.name }}</a
            >
            <g-link v-else :to="element.link" class="animated-link">{{
              element.name
            }}</g-link>
          </li>
        </ul>
      </nav>
      <div
        class="hidden text-gray-400 md:ml-auto md:inline-block md:order-last"
      >
        <ul class="list-none flex justify-center md:justify-end">
          <li class="mr-0 sm:mr-6">
            <theme-switcher v-on="$listeners" :theme="theme" />
          </li>
          <li
            :key="element.name"
            v-for="(element, index) in $static.metadata.social"
            class="hover:text-white sm:block"
            v-bind:class="{
              'mr-6': index != Object.keys($static.metadata.social).length - 1,
            }"
          >
            <span class="text-sm">
              <a :href="element.link" target="_blank" rel="noopener noreferrer">
                <font-awesome :icon="['fab', element.icon]" />
              </a>
            </span>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
/*
 * I'm a lazy guy, so i used this script
 * https://codepen.io/ninaregli/pen/OjeMLP
 * to calculate the current scroll position
 *
 * Will be used to add/remove the additional
 * css classes to show the sticky navbar
 */

import ThemeSwitcher from "~/components/ThemeSwitcher";

export default {
  components: {
    ThemeSwitcher,
  },
  props: {
    disableScroll: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
    },
  },
  data: function () {
    return {
      scrollPosition: null,
      headerHeight: 0,
      isOpen: false,
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    setHeaderHeight(height) {
      this.headerHeight = height;
    },
  },

  mounted() {
    if (!this.disableScroll) {
      var height = document.getElementById("header").clientHeight;
      this.setHeaderHeight(height);
      window.addEventListener("scroll", this.updateScroll);
    }
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
    navigation : headerNavigation {
      name
      link
      external
    }
    social {
      icon
      link
    }
  }
}
</static-query>
