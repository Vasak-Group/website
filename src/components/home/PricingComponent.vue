<template>
  <div class="flex flex-col items-center justify-center mt-20">
    <p class="text-vsk-2 font-bold">{{ $t("home.plans.title") }}</p>
    <h2 class="text-vsk-1 text-5xl font-bold text-center">
      {{ $t("home.plans.question") }}
    </h2>
    <p class="py-5 max-w-md text-center text-gray-800 dark:text-gray-200">
      {{ $t("home.plans.answer") }}
    </p>
  </div>
  <div
    class="flex flex-wrap items-center justify-center w-full mx-auto mb-20"
  >
    <PricingCard v-for="price in prices" :key="price.id" v-bind="price" />
  </div>
</template>

<script setup lang="ts">
import prices from "@/data/prices";
import PricingCard from "@/components/cards/PricingCard.vue";
import { defineComponent } from "vue";

defineComponent({
  data() {
    return {
      prices,
    };
  },
  components: { PricingCard },
});
</script>

<style></style>
../../data/prices