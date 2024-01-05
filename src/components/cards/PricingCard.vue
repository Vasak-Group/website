<template>
  <div
    class="flex flex-col flex-grow mt-8 overflow-hidden max-w-sm transform bg-white dark:bg-gray-800 rounded-xl drop-shadow-lg mx-2"
    :class="classStyle"
  >
    <div class="flex flex-col items-center p-10 bg-vsk-1">
      <span class="font-semibold text-white">{{ $t(nombre) }}</span>
      <div class="flex items-center pt-3">
        <span class="text-6xl font-bold text-white"><FontAwesomeIcon :icon="icon" /></span>
      </div>
    </div>
    <div class="p-10">
      <ul class="text-center">
        <li v-for="caracteristica in caracteristicas" :key="caracteristica.id">
          <span :class="caracteristica.classStyle" class="text-gray-900 dark:text-gray-200" >{{
            $t(caracteristica.desc)
          }}</span>
        </li>
      </ul>
    </div>
    <div class="flex px-10 pb-10 justfy-center">
      <a
        :href="sanitizeUrl(url)"
        class="flex items-center justify-center text-gray-950 dark:text-gray-100 w-full h-12 px-6 text-sm uppercase bg-gray-200 dark:bg-gray-700 rounded-xl hover:bg-vsk-1"
      >
        {{$t("home.plans.button")}}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { sanitizeUrl } from "@braintree/sanitize-url";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "PricingCard",
  props: {
    nombre: {
      type: String,
      required: true,
    },
    caracteristicas: {
      type: Array<any>(),
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    classStyle: {
      type: String,
      required: true,
    },
  },
  methods: {
    sanitizeUrl,
  },
  components: {
    FontAwesomeIcon,
  },
});
</script>

<style></style>
