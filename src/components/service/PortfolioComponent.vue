<template>
  <section class="px-10 py-20 bg-white dark:bg-gray-800">
    <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
      <span class="font-semibold text-lg mb-2 block text-vsk-2">{{ $t('portfolio.title') }}</span>
      <h2 class="font-bold text-3xl sm:text-4xl md:text-[40px] text-vsk-1 mb-4">
        {{ $t('portfolio.question') }}
      </h2>
      <p class="text-gray-700 dark:text-gray-200">
        {{ $t('portfolio.answer') }}
      </p>
    </div>
    <section class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
      <ProjectCard
        v-for="project in viewProjects()"
        :key="project.id"
        :id="project.id"
        :name="project.name"
        :image="project.image"
      />
    </section>
  </section>
</template>

<script lang="ts">
import projects from '@/data/projects';
import ProjectCard from '@/components/cards/ProjectCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortfolioComponent',
  methods: {
    viewProjects() {
      const showers = projects.filter((project) => project.show);
      const shuffled = showers.sort(function () {
        return 0.5 - Math.random();
      });
      return shuffled.slice(0, 6);
    }
  },
  components: { ProjectCard }
});
</script>
