<script lang="ts">
import { defineComponent } from "vue";
import AboutComponent from "@/components/about/AboutComponent.vue";
import TeamComponent from "@/components/about/TeamComponent.vue";
import BreadcrumbsComponent from "@/components/global/BreadcrumbsComponent.vue";
import TestimonialsComponent from "@/components/global/TestimonialsComponent.vue";
import CallToAction from "@/components/home/CallToAction.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    AboutComponent,
    TeamComponent,
    BreadcrumbsComponent,
    TestimonialsComponent,
    CallToAction,
  },
  mounted() {
    document.title = `${this.$t("about.title")} | Vasak Group`;
    window.scrollTo(0, 0);
  },
});
</script>

<template>
  <div class="main">
    <BreadcrumbsComponent :title="$t('about.title')" />
    <AboutComponent />
    <TeamComponent />
    <TestimonialsComponent />
    <CallToAction />
  </div>
</template>
