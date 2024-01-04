<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'CallToAction',
  components: {
    RouterLink
  }
});
</script>

<template>
  <div class="p-32 text-gray-800 dark:text-gray-100 text-center">
    <h2 class="text-3xl font-bold mb-8 text-vsk-1">{{ $t('contact.question') }}</h2>
    <p class="text-lg max-w-xl mx-auto">
      {{ $t('contact.answer') }}
    </p>
    <p class="mt-14">
    <RouterLink
      to="/contact"
      class="font-medium rounded-xl text-white bg-gradient-to-bl from-vsk-2 to-vsk-1 hover:to-vsk-2 px-16 py-4"
    >
      {{ $t('contact.title') }}
    </RouterLink>
    </p>
  </div>
</template>
