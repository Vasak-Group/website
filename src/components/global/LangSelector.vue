<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '@/i18n';
import { defineComponent } from 'vue';

const { locale } = useI18n({ useScope: 'global' });

function changeLanguage(lang: string) {
  locale.value = lang;
  setI18nLanguage(lang);
  window.location.reload();
}

function convertLocaleToFlag(locale: string) {
  switch (locale) {
    case 'en':
      return '🇺🇸';
    case 'es':
      return '🇪🇸';
    case 'pt':
      return '🇵🇹';
    case 'it':
      return '🇮🇹';
    default:
      return '🇪🇸';
  }
}

defineComponent({
  name: 'LangSelector',
});
</script>

<template>
  <li class="nav-item">
    <a href="javascript:void(0)">{{ convertLocaleToFlag(locale["value"]) }}</a>
    <ul class="sub-menu">
      <li class="nav-item"
        v-for="optionLocale in supportLocales"
        :key="`locale-${optionLocale}`">
        <a href="javascript:void(0)"
          @click="changeLanguage(optionLocale)">{{ convertLocaleToFlag(optionLocale) }}</a>
      </li>
    </ul>
  </li>
</template>