<template>
  <section class="relative py-32 lg:py-36">
    <div
      class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12"
    >
      <div
        class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block"
      >
        <span
          class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-vsk-1 blur-xl opacity-60 lg:opacity-95 lg:block hidden"
        ></span>
        <span
          class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-vsk-2 blur-xl opacity-80"
        ></span>
      </div>
      <span
        class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-vsk-2 to-vsk-1 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"
      ></span>
      <div
        class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
      >
        <h1
          class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100"
        >
          {{ $t("home.welcome") }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-bl from-vsk-2 to-vsk-1 font-vsk font-bold"
            >Vasak Group</span
          >
        </h1>
        <p class="mt-8 text-gray-700 dark:text-gray-300">
          {{ $t("home.headerText") }}
        </p>
        <div class="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
          <div class="flex items-center justify-center sm:flex-row flex-col gap-5 w-full">
            <RouterLink
              to="/about"
              class="w-full sm:w-auto flex items-center justify-center px-3 py-3 border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-bl from-vsk-2 to-vsk-1 hover:to-vsk-2 md:py-4 md:text-lg md:px-10"
            >
              {{ $t("home.knowUs") }}
            </RouterLink>
            <RouterLink
              to="/contact"
              class="w-full sm:w-auto flex items-center justify-center px-3 py-3 border-transparent text-base font-medium rounded-xl text-vsk-1 bg-white hover:bg-vsk-1 hover:text-white md:py-4 md:text-lg md:px-10"
            >
              {{ $t("navbar.contact") }}
            </RouterLink>
          </div>
        </div>
      </div>
      <div
        class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"
      >
        <img
          src="/img/head.svg"
          alt="Hero image"
          width="2350"
          height="2359"
          class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "HeroHome",
  components: {
    RouterLink,
  },
});
</script>
