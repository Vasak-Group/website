<script lang="ts" setup>
import { defineComponent, onMounted } from 'vue';
import BreadcrumbsComponent from '@/components/global/BreadcrumbsComponent.vue';
import PortfolioComponent from '@/components/service/PortfolioComponent.vue';
import ServicesComponent from '@/components/service/ServicesComponent.vue';
import TechnologiesComponent from '@/components/service/TechnologiesComponent.vue';
import i18n from '@/i18n';

const { t } = i18n().global;

onMounted(() => {
  document.title = t('services.title') + ' | Vasak Group';
  window.scrollTo(0, 0);
});

defineComponent({
  name: 'ServiceView'
})
</script>

<template>
  <BreadcrumbsComponent :title="$t('services.title')" />
  <div class="main">
    <ServicesComponent />
    <PortfolioComponent />
    <TechnologiesComponent />
  </div>
</template>