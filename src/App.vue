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

<style scoped>
</style>
