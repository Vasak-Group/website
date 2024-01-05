<template>
  <div class="bg-white dark:bg-gray-800 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-vsk-2">
          {{ $t('home.features.feature') }}
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-vsk-1 sm:text-4xl">
          {{ $t('home.features.question') }}
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          {{ $t('home.features.answer') }}
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <FeatureCard v-for="featured in featureds" :key="featured.id" v-bind="featured" />
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import featureds from '@/data/features';
import FeatureCard from '@/components/cards/FeatureCard.vue';

export default defineComponent({
  name: 'FeatureComponent',
  components: {
    FeatureCard
  },
  setup() {
    return {
      featureds
    };
  }
});
</script>
