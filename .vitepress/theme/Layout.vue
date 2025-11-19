<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import HomeLayout from './layouts/HomeLayout.vue';

import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
</script>

<template>
  <NavBarComponent />
  <!-- Transición suave entre los diferentes <main> manteniendo la lógica original -->
  <Transition name="page-fade" mode="out-in" appear>
    <main v-if="frontmatter.layout === 'home'" :key="frontmatter.layout || 'home'">
      <HomeLayout />
    </main>
    <main v-else :key="frontmatter.layout || 'content'">
      <Content />
    </main>
  </Transition>
  <FooterComponent />
</template>

<style scoped>
/* Fade + slight slide for page changes */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 240ms cubic-bezier(.2, .8, .2, 1), transform 240ms cubic-bezier(.2, .8, .2, 1);
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-enter-to,
.page-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {

  .page-fade-enter-active,
  .page-fade-leave-active {
    transition: none;
  }
}
</style>
