<script setup>
import ClientsHome from '../components/home/ClientsHome.vue';
import ContactHome from '../components/home/ContactHome.vue';
import CountsHome from '../components/home/CountsHome.vue';
import FAQHome from '../components/home/FAQHome.vue';
import FeatureHome from '../components/home/FeatureHome.vue';
import HeroHome from '../components/home/HeroHome.vue';
import PortfolioHome from '../components/home/PortfolioHome.vue';
import PricingHome from '../components/home/PricingHome.vue';
import ServicesHome from '../components/home/ServicesHome.vue';
import TechnologiesHome from '../components/home/TechnologiesHome.vue';
</script>

<template>
  <HeroHome />
  <main id="main">
    <FeatureHome />
    <!--<CountsHome />-->
    <!--<ClientsHome />-->
    <ServicesHome />
    <!--<TechnologiesHome />-->
    <PortfolioHome />
    <PricingHome />
    <!--<FAQHome />-->
    <!--<ContactHome />-->
  </main>
</template>
