<template>
  <div class="bg-gradient-to-bl from-vsk-2 to-vsk-1 -mt-3">
    <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div
        class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10"
      >
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10"
        >
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeroComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
