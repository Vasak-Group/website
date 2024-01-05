<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import BreadcrumbsComponent from '@/components/global/BreadcrumbsComponent.vue';
import PortfolioComponent from '@/components/service/PortfolioComponent.vue';
import ServicesComponent from '@/components/service/ServicesComponent.vue';
import TechnologiesComponent from '@/components/service/TechnologiesComponent.vue';

export default defineComponent({
  name: 'ServiceView',
  mounted() {
    document.title = this.$t('services.title') + ' | Vasak Group';
    window.scrollTo(0, 0);
  },
  components: {
    BreadcrumbsComponent,
    PortfolioComponent,
    ServicesComponent,
    TechnologiesComponent
  }
});
</script>

<template>
  <BreadcrumbsComponent :title="$t('services.title')" />
  <ServicesComponent />
  <PortfolioComponent />
  <TechnologiesComponent />
</template>
