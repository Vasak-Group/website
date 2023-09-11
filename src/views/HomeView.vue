<script setup lang="ts">
import FeatureHome from '../components/home/FeatureHome.vue';
import HeroHome from '../components/home/HeroHome.vue';
import PricingComponent from '../components/home/PricingComponent.vue';
import TestimonialsComponent from '../components/global/TestimonialsComponent.vue';
</script>

<template>
  <HeroHome />
  <main id="main">
    <FeatureHome />
    <PricingComponent />
    <TestimonialsComponent />
  </main>
</template>
