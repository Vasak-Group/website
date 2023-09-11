<script lang="ts">
import { defineComponent } from 'vue';
import AboutComponent from '../components/about/AboutComponent.vue';
import TeamComponent from '../components/about/TeamComponent.vue';
import BreadcrumbsComponent from '../components/global/BreadcrumbsComponent.vue';
import TestimonialsComponent from '../components/global/TestimonialsComponent.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    AboutComponent,
    TeamComponent,
    BreadcrumbsComponent,
    TestimonialsComponent
  },
});

</script>

<template>
  <div class="main">
    <BreadcrumbsComponent title="Sobre Nosotros" />
    <AboutComponent />
    <TeamComponent />
    <TestimonialsComponent />
  </div>
</template>