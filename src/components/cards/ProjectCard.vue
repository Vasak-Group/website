<template>
  <article
    class="relative w-full h-64 bg-cover bg-center group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
    :style="`background-image: url('${image}');`"
  >
    <div
      class="absolute inset-0 bg-black bg-opacity-40 group-hover:opacity-0 transition duration-300 ease-in-out"
    ></div>
    <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
      <h3 class="text-center">
        <RouterLink
          :to="sanitizeUrl('/project/' + id)"
          class="text-white hover:text-transparent text-2xl font-bold text-center"
        >
          <span class="absolute inset-0"></span>
          {{ name }}
        </RouterLink>
      </h3>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { sanitizeUrl } from '@braintree/sanitize-url';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  methods: {
    sanitizeUrl
  },
  components: { RouterLink }
});
</script>
