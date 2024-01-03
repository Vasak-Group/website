<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
// @ts-ignore
import social from "@/data/social.json";

export default defineComponent({
  name: "FooterComponent",
  data() {
    return {
      social,
    };
  },
  components: {
    RouterLink,
  },
});
</script>

<template>
  <div class="flex flex-col mx-3 mt-3 bg-white dark:bg-gray-800 rounded-xl">
    <div class="w-full draggable">
      <div class="container flex flex-col mx-auto">
        <div class="flex flex-col items-center w-full my-20">
          <span class="mb-8">
            <img src="/img/logo.svg" alt="logo" loading="lazy" class="h-20" />
          </span>
          <div class="flex flex-col items-center gap-6 mb-8">
            <div
              class="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900"
            >
              <RouterLink to="/about" class="text-gray-500 hover:text-vsk-1">{{
                $t("navbar.about")
              }}</RouterLink>
              <RouterLink
                to="/contact"
                class="text-gray-500 hover:text-vsk-1"
                >{{ $t("footer.contact") }}</RouterLink
              >
              <a
                href="https://qrgenerator.vasak.net.ar/"
                rel="noopener"
                target="_blank"
                class="text-gray-500 hover:text-vsk-1"
                >QR Generator</a
              >
              <a
                href="https://wppgenerator.vasak.net.ar/"
                rel="noopener"
                target="_blank"
                class="text-gray-500 hover:text-vsk-1"
                >WhatsApp Link Generator</a
              >
            </div>
            <div class="flex items-center gap-8">
              <template v-for="red in social" :key="red.name">
                <a :href="red.url" class="text-grey-700 dark:text-gray-300 hover:text-vsk-2"
                  ><i :class="red.icon"></i
                ></a>
              </template>
            </div>
          </div>
          <div class="flex items-center">
            <p
              class="text-base px-5 font-normal leading-7 text-center text-gray-700 dark:text-gray-300"
            >
              {{ $t("footer.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap my-5">
    <div class="w-full max-w-full sm:w-3/4 mx-auto text-center">
      <p class="text-sm text-slate-500 py-1">
        <RouterLink
          to="/"
          class="text-transparent bg-clip-text bg-gradient-to-bl from-vsk-2 to-vsk-1"
          rel="nofollow"
          >Vasak group</RouterLink
        >
        {{ $t("footer.copy") }}
        <a href="#" class="scroll-top">
          <i class="fa fa-arrow-up"></i>
        </a>
      </p>
    </div>
  </div>
</template>
