<script setup lang="ts">
import FeatureComponent from '../components/home/FeatureComponent.vue';
import HeroHome from '../components/home/HeroHome.vue';
import PricingComponent from '../components/home/PricingComponent.vue';
import TestimonialsComponent from '../components/global/TestimonialsComponent.vue';
</script>

<template>
  <HeroHome />
  <main id="main">
    <FeatureComponent />
    <PricingComponent />
    <TestimonialsComponent />
  </main>
</template>
