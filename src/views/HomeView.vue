<script lang="ts">
import { defineComponent } from 'vue';
import FeatureComponent from '@/components/home/FeatureComponent.vue';
import HeroHome from '@/components/home/HeroHome.vue';
import PricingComponent from '@/components/home/PricingComponent.vue';
import TestimonialsComponent from '@/components/global/TestimonialsComponent.vue';
import CallToAction from '@/components/home/CallToAction.vue';

export default defineComponent({
  name: 'HomeView',
  mounted() {
    document.title = 'Vasak Group';
    window.scrollTo(0, 0);
  },
  components: {
    FeatureComponent,
    HeroHome,
    PricingComponent,
    TestimonialsComponent,
    CallToAction
  }
});
</script>

<template>
  <HeroHome />
  <main id="main">
    <FeatureComponent />
    <PricingComponent />
    <TestimonialsComponent />
    <CallToAction />
  </main>
</template>
