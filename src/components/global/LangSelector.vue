<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '@/i18n';

const flags = {
  en: '🇺🇸',
  es: '🇪🇸',
  pt: '🇵🇹',
  it: '🇮🇹',
};

const { locale } = useI18n({ useScope: 'global' });

function changeLanguage(lang) {
  locale.value = lang;
  setI18nLanguage(lang);
}
</script>

<template>
  <li class="nav-item">
    <a href="javascript:void(0)">{{ flags[locale] }}</a>
    <ul class="sub-menu">
      <li class="nav-item"
        v-for="optionLocale in supportLocales"
        :key="`locale-${optionLocale}`">
        <a href="javascript:void(0)"
          @click="changeLanguage(optionLocale)">{{ flags[optionLocale] }}</a>
      </li>
    </ul>
  </li>
</template>