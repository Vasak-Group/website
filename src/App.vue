<script lang="ts">
/* eslint-disable */
import { RouterView } from 'vue-router';
import { defineComponent } from 'vue';

import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
    RouterView
  },
  mounted() {
    window.scrollTo(0, 0);
  }
});
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>
