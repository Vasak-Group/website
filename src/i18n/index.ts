import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

let i18n: ReturnType<typeof createI18n>;

export const SUPPORT_LOCALES = ['es', 'en', 'pt', 'it'];

export function setI18nLanguage(locale: string) {
  loadLocaleMessages(locale);

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale = { value: locale };
  }

  document.querySelector('html')?.setAttribute('lang', locale);
  localStorage.setItem('lang', locale);
}

export async function loadLocaleMessages(locale: string) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
  );
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

export default function setupI18n() {
  if (!i18n) {
    const locale = localStorage.getItem('lang') || 'es';

    i18n = createI18n({
      globalInjection: true,
      legacy: false,
      locale: locale,
      fallbackLocale: 'es'
    });

    setI18nLanguage(locale);
  }
  return i18n;
}
