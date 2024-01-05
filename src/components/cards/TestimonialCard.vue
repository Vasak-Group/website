<template>
  <figure class="block w-full mt-10">
    <blockquote
      class="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9"
    >
      <p>{{ $t(comment) }}</p>
    </blockquote>
    <figcaption class="mt-10">
      <img class="mx-auto h-10 w-10 rounded-full" :src="image" :alt="name" loading="lazy" />
      <div class="mt-4 flex items-center justify-center space-x-3 text-base">
        <div class="font-semibold text-gray-900 dark:text-gray-100">{{ name }}</div>
        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900 dark:fill-gray-100">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <div class="text-gray-600 dark:text-gray-400">{{ position }}</div>
      </div>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestimonialCard',
  props: {
    name: String,
    position: String,
    image: String,
    comment: {
      type: String,
      required: true
    }
  }
});
</script>

<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
