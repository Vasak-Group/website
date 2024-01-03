<script lang="ts">
import { defineComponent } from "vue";
import { useDark, useToggle } from "@vueuse/core";
// @ts-ignore
import { UseDark } from "@vueuse/components";

export default defineComponent({
  name: "ThemeToggle",
  data() {
    return {
      isDark: useDark(),
    };
  },
  methods: {
    toggleTheme() {
      return useToggle(this.isDark);
    },
  },
  components: {
    UseDark,
  },
});
</script>

<template>
  <UseDark v-slot="{ toggleDark }">
    <button
      title="Toggle Theme"
      @click="toggleDark()"
      class="w-12 h-6 rounded-full p-1 bg-gray-400 dark:bg-gray-600 relative transition-colors duration-500 ease-in focus:outline-none focus:ring-2 focus:ring-vsk-2 dark:focus:ring-vsk-1 focus:border-transparent"
    >
      <div
        id="toggle"
        class="rounded-full w-4 h-4 bg-vsk-1 dark:bg-vsk-2 relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out"
      ></div>
    </button>
  </UseDark>
</template>
