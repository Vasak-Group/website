<script lang="ts">
import { defineComponent } from 'vue';
import AboutComponent from '../components/about/AboutComponent.vue';
import TeamComponent from '../components/about/TeamComponent.vue';
import TestimonialsComponent from '../components/global/TestimonialsComponent.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    AboutComponent,
    TeamComponent,
    TestimonialsComponent
  },
});

</script>

<template>
  <div class="main">
    <AboutComponent />
    <TeamComponent />
    <TestimonialsComponent />
  </div>
</template>