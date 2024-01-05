<template>
  <div class="bg-white dark:bg-gray-900 py-12">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="text-center pb-12">
        <h2 class="text-base font-bold text-vsk-2">{{ $t('about.team.title') }}</h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-vsk-1">
          {{ $t('about.team.question') }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          {{ $t('about.team.answer') }}
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TeamCard v-for="member in vskteam" v-bind:key="member.id" v-bind="member" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import team from '@/data/team';
import TeamCard from '@/components/cards/TeamCard.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TeamComponent',
  components: {
    TeamCard
  },
  data() {
    return {
      vskteam: team.filter((member) => member.show)
    };
  }
});
</script>
