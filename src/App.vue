<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
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
