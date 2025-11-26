<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import TechnologiesSection from './components/sections/general/TechnologiesSection.vue';
import AboutLayout from './layouts/AboutLayout.vue';
import HomeLayout from './layouts/HomeLayout.vue';
import ServicesLayout from './layouts/ServicesLayout.vue';

import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <NavBarComponent />
  <Transition name="page-fade" mode="out-in" appear>
    <main v-if="frontmatter.layout === 'home'" :key="frontmatter.layout || 'home'">
      <HomeLayout />
    </main>
    <main v-else-if="frontmatter.layout === 'about'" :key="frontmatter.layout || 'headtitle'">
      <AboutLayout />
    </main>
    <main v-else-if="frontmatter.layout === 'services'" :key="frontmatter.layout || 'services'">
      <ServicesLayout />
    </main>
    <main v-else :key="frontmatter.layout || 'content'">
      <Content />
    </main>
  </Transition>
  <FooterComponent />
</template>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  will-change: opacity, transform, filter;
  transition: opacity 520ms cubic-bezier(.16, .84, .24, 1),
    transform 520ms cubic-bezier(.16, .84, .24, 1),
    filter 520ms cubic-bezier(.16, .84, .24, 1);
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.992);
  filter: blur(4px);
}

.page-fade-enter-to,
.page-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.page-fade-enter-from>*,
.page-fade-leave-to>* {
  box-shadow: 0 8px 30px rgba(2, 6, 23, 0.06);
}

@media (prefers-reduced-motion: reduce) {

  .page-fade-enter-active,
  .page-fade-leave-active {
    transition: none !important;
    filter: none !important;
    transform: none !important;
  }
}
</style>
