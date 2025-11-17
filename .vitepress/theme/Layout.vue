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
  <main v-if="frontmatter.layout === 'home'">
    <HomeLayout />
  </main>
  <main v-else>
    <Content />
  </main>
  <FooterComponent />
</template>
