<script lang="ts">
import { defineComponent } from 'vue';
import ServiceCard from '@/components/cards/ServiceCard.vue';
import services from '@/data/services';

export default defineComponent({
  name: 'ServicesComponent',
  data() {
    return {
      services
    };
  },
  components: {
    ServiceCard
  }
});
</script>

<template>
  <section class="pt-20 pb-12">

      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span class="font-semibold text-lg mb-2 block text-vsk-2">{{
              $t('services.title')
            }}</span>
            <h2 class="font-bold text-3xl sm:text-4xl md:text-[40px] text-vsk-1 mb-4">
              {{ $t('services.question') }}
            </h2>
            <p class="text-gray-700 dark:text-gray-200">
              {{ $t('services.answer') }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div v-for="service in services" :key="service.id" class="w-full md:w-1/2 lg:w-1/3 px-4 pb-8">
          <ServiceCard
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
          />
        </div>
      </div>
  </section>
</template>
