<script setup lang="ts">
import { useI18n } from "vue-i18n";
// @ts-ignore
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from "@/i18n";

const { locale } = useI18n({ useScope: "global" });

function changeLanguage(lang: string) {
  locale.value = lang;
  setI18nLanguage(lang);
  window.location.reload();
}

function convertLocaleToFlag(locale: string) {
  switch (locale) {
    case "en":
      return "🇺🇸";
    case "es":
      return "🇪🇸";
    case "pt":
      return "🇵🇹";
    case "it":
      return "🇮🇹";
    default:
      return "🇪🇸";
  }
}
</script>

<template>
  <div class="dropdown inline-block relative">
    <button
      class=" font-semibold px-5 inline-flex items-center"
    >
      <span>{{ //@ts-ignore
      convertLocaleToFlag(locale["value"]) }}</span>
    </button>
    <ul class="dropdown-content absolute hidden p-2 bg-gray-300 dark:bg-gray-600 rounded-xl">
      <li
      v-for="optionLocale in supportLocales"
        :key="optionLocale"
      >
        <a
          class="rounded-md hover:bg-white hover:dark:bg-gray-800 py-1 px-3 block whitespace-no-wrap"
          href="#"
          @click="changeLanguage(optionLocale)"
          >{{ convertLocaleToFlag(optionLocale) }}</a
        >
      </li>

    </ul>
  </div>

</template>

<style>
.dropdown:hover > .dropdown-content {
  display: block;
}
</style>
