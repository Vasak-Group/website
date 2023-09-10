<template>
  <BreadcrumbsProjects :title="project?.name" />
  <section class="portfolio-section pt-130">
    <div class="container">
      <div class="row">

        <div class="col-xl-8 col-lg-7">
          <div class="left-side-wrapper">
            <div class="single-portfolio mb-60">
              <div class="single-portfolio-img mb-30">
                <img :src="project?.image" :alt="project?.name" :title="project?.name">
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-5">
          <InfoProject :name="project?.name" :description="project?.description" :type="project?.type"
            :client="project?.client" :url="project?.url" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BreadcrumbsProjects from '../components/project/BreadcrumbsProjects.vue';
import projects from '../data/projects.json';
import InfoProject from '../components/project/InfoProject.vue';
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Project from '../types/Project';

const route = useRoute();
const project: Project = projects.find(project => project.id === parseInt(route.params.id[0])) || {} as Project;

onMounted(() => {
  document.title =  project.name + ' | Vasak';
  window.scrollTo(0, 0);
})

defineComponent({
  name: 'ProjectView',
  components: {
    BreadcrumbsProjects,
    InfoProject
  }
})
</script>

<style scoped>
img {
  border-radius: var(--border-radius);
  box-shadow: 0px 0 30px rgb(34 34 34 / 8%);
}
</style>
