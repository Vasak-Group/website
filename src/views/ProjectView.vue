<template>
  <BreadcrumbsProjects :title="project.name" />
  <section id="portfolio-details" class="portfolio-details">
    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-8">
          <div class="portfolio-details-slider">
            <div class="align-items-center">
              <img :src="project.image" :alt="project.name" :title="project.name" />
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <InfoProject :name="project.name" :description="project.description" :type="project.type" :client="project.client" :url="project.url" />
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import BreadcrumbsProjects from '../components/project/BreadcrumbsProjects.vue';

import projects from '../data/projects.json';
import InfoProject from '../components/project/InfoProject.vue';

export default {
  computed: {
    project() {
      return projects.find(project => project.id === parseInt(this.$route.params.id));
    }
  },
  components: {
    BreadcrumbsProjects,
    InfoProject
}
}
</script>

<style scoped>
img {
  border-radius: var(--border-radius);
  box-shadow: 0px 0 30px rgb(34 34 34 / 8%);
}
</style>
