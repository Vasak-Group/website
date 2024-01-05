<template>
  <section class="relative">
    <div class="absolute inset-0">
      <img
        :src="project?.image"
        :alt="project?.name"
        :title="project?.name"
        width="100%"
        height="100%"
        style=""
      />
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col md:ml-auto w-full my-16 py-20 md:mt-0 relative z-10 shadow-lg"
      >
        <InfoProject
          :name="project?.name"
          :description="project?.description"
          :type="project?.type"
          :client="project?.client"
          :url="project?.url"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import projects from '@/data/projects';
import InfoProject from '@/components/project/InfoProject.vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ProjectView',
  data() {
    return {
      projects,
      route: useRoute()
    };
  },
  computed: {
    project() {
      return this.projects.find((project) => project.id === Number(this.route.params.id));
    }
  },
  components: {
    InfoProject
  },
  mounted() {
    document.title = this.project.name + ' | Vasak Group';
    window.scrollTo(0, 0);
  }
});
</script>
