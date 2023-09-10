<script lang="ts">
import { defineComponent } from 'vue';
import TeamComponent from '../components/about/TeamComponent.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    TeamComponent,
  },
});

</script>

<template>
  <div class="main">
    <TeamComponent />
  </div>
</template>