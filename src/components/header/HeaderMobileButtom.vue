<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "HeaderMobileButtom",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  components: {
    RouterLink,
  },
})
</script>

<template>
  <RouterLink :to="link" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:text-vsk-1 hover:bg-gray-300 dark:hover:bg-gray-700">
    {{ //@ts-ignore
     $t(title) }}
  </RouterLink>
</template>