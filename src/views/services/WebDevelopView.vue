<script lang="ts">
import { defineComponent } from 'vue';
import BreadcrumbsComponent from '@/components/global/BreadcrumbsComponent.vue';

export default defineComponent({
  name: 'WebDevelopView',
  components: {
    BreadcrumbsComponent
  },
  mounted() {
    window.scrollTo(0, 0);
    document.title = this.$t('services.web.title') as string;
  }
});
</script>

<template>
  <div class="main">
    <BreadcrumbsComponent :title="$t('services.web.title')" />
  </div>
</template>