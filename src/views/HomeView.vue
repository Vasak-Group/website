<script setup>
import AboutHome from '../components/home/AboutHome.vue';
import ClientsHome from '../components/home/ClientsHome.vue';
import ContactHome from '../components/home/ContactHome.vue';
import CountsHome from '../components/home/CountsHome.vue';
import FAQHome from '../components/home/FAQHome.vue';
import FeaturedHome from '../components/home/FeaturedHome.vue';
import HeroHome from '../components/home/HeroHome.vue';
import PortfolioHome from '../components/home/PortfolioHome.vue';
import PricingHome from '../components/home/PricingHome.vue';
import ServicesHome from '../components/home/ServicesHome.vue';
import TeamHome from '../components/home/TeamHome.vue';
import TestimonialsHome from '../components/home/TestimonialsHome.vue';
</script>

<template>
  <HeroHome />
  <main id="main">
    <FeaturedHome />
    <AboutHome />
    <CountsHome />
    <ClientsHome />
    <ServicesHome />
    <TestimonialsHome />
    <PortfolioHome />
    <TeamHome />
    <PricingHome />
    <FAQHome />
    <ContactHome />
  </main>
</template>
