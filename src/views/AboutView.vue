<script lang="ts">
import { defineComponent } from "vue";
import AboutComponent from "@/components/about/AboutComponent.vue";
import TeamComponent from "@/components/about/TeamComponent.vue";
import BreadcrumbsComponent from "@/components/global/BreadcrumbsComponent.vue";
import TestimonialsComponent from "@/components/global/TestimonialsComponent.vue";
import i18n from "@/i18n";

const { t } = i18n().global;

export default defineComponent({
  name: "AboutView",
  data() {
    return { t };
  },
  components: {
    AboutComponent,
    TeamComponent,
    BreadcrumbsComponent,
    TestimonialsComponent,
  },
  onload() {
    document.title = `${t("about.title")} | Vasak Group`;
    window.scrollTo(0, 0);
  },
});
</script>

<template>
  <div class="main">
    <BreadcrumbsComponent :title="t('about.title')" />
    <AboutComponent />
    <TeamComponent />
    <TestimonialsComponent />
  </div>
</template>
