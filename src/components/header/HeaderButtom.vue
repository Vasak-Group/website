<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "HeaderButtom",
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
  <RouterLink :to="link" class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-vsk-1">
    {{ //@ts-ignore
     $t(title) }}
  </RouterLink>
</template>