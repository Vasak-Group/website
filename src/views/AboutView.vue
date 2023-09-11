<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import AboutComponent from '../components/about/AboutComponent.vue';
import TeamComponent from '../components/about/TeamComponent.vue';
import BreadcrumbsComponent from '../components/global/BreadcrumbsComponent.vue';
import TestimonialsComponent from '../components/global/TestimonialsComponent.vue';

onMounted(() => {
  document.title = 'Sobre Nosotros | Vasak Group';
  window.scrollTo(0, 0);
});

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