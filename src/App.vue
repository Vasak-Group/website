<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import TopBar from './components/TopBar.vue';
</script>

<template>
  <TopBar />
  <Header />

  <RouterView />

  <Footer />
</template>

<style lang="scss">
@import "./assets/vsk-template/scss/style.scss";

:root {
  --site-color: #f6bb31;
  --site-color-2: #f46619;
}
</style>
