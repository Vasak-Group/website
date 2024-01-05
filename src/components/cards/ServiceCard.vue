<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'ServiceCard',
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

<template>
  <div class="p-5 md:px-7 xl:px-10 rounded-xl bg-white dark:bg-gray-800 shadow-lg h-[100%]">
    <div class="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 bg-vsk-1">
      <FontAwesomeIcon :icon="icon" class="text-white text-[30px]" />
    </div>
    <h4 class="font-semibold text-xl text-gray-800 dark:text-gray-100 mb-3">{{ $t(title) }}</h4>
    <p class="text-gray-600 dark:text-gray-400">
      {{ $t(description) }}
    </p>
  </div>
</template>
