<script setup lang="ts">
/* eslint-disable */
import { RouterView } from 'vue-router';
import { onMounted, defineComponent } from 'vue';

import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

onMounted(() => {
  window.scrollTo(0, 0);
})

defineComponent({
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
  },
});
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style lang="scss">
@import "./assets/vsk-template/scss/style.scss";

:root {
  --site-color: #f6bb31;
  --site-color-2: #f46619;
}
</style>
