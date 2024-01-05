<template>
  <BreadcrumbsComponent :title="$t('contact.title')" />
  <section class="text-gray-600 body-font relative">
    <MapComponent />
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg"
      >
        <h2 class="text-vsk-1 text-lg mb-1 font-medium title-font">{{ $t('contact.question') }}</h2>
        <p class="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
          {{ $t('contact.answer') }}
        </p>
        <ContactForm />
      </div>
    </div>
  </section>
  <PreFooterData />
</template>

<script lang="ts">
import ContactForm from '@/components/contact/ContactForm.vue';
import MapComponent from '@/components/contact/MapComponent.vue';
import PreFooterData from '@/components/contact/PreFooterData.vue';
import BreadcrumbsComponent from '@/components/global/BreadcrumbsComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactView',
  components: {
    BreadcrumbsComponent,
    MapComponent,
    ContactForm,
    PreFooterData,
  },
  mounted() {
    document.title = this.$t('contact.title') + ' | Vasak Group';
    window.scrollTo(0, 0);
  }
});
</script>
