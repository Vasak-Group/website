<template>
  <div class="relative pl-16">
    <dt class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
      <div
        class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-vsk-1"
      >
        <FontAwesomeIcon :icon="icon" class="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      {{ $t(title) }}
    </dt>
    <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{{ $t(description) }}</dd>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'FeatureCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  components: {
    FontAwesomeIcon
  }
});
</script>

<style></style>
