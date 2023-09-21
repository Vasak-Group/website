<script setup lang="ts">
import { defineComponent, onMounted } from 'vue';
import AboutComponent from '@/components/about/AboutComponent.vue';
import TeamComponent from '@/components/about/TeamComponent.vue';
import BreadcrumbsComponent from '@/components/global/BreadcrumbsComponent.vue';
import TestimonialsComponent from '@/components/global/TestimonialsComponent.vue';
import i18n from '@/i18n';

const { t } = i18n().global;

onMounted(() => {
  document.title = `${t('about.title')} | Vasak Group`;
  window.scrollTo(0, 0);
});

defineComponent({
  name: 'AboutView',
  components: {
    AboutComponent,
    TeamComponent,
    BreadcrumbsComponent,
    TestimonialsComponent
  }
});

</script>

<template>
  <div class="main">
    <BreadcrumbsComponent :title="$t('about.title')" />
    <AboutComponent />
    <TeamComponent />
    <TestimonialsComponent />
  </div>
</template>