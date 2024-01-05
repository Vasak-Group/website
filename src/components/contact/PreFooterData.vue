<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'PreFooterData',
  components: {
    FontAwesomeIcon
  }
});
</script>

<template>
  <div class="container flex flex-col mx-auto">
    <div class="w-full draggable">
      <div class="container flex flex-col items-center gap-16 mx-auto my-16">
        <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white dark:bg-gray-800 rounded-3xl shadow-main">
            <span>
              <FontAwesomeIcon icon="envelope" class="text-4xl text-vsk-2" />
            </span>
            <p class="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{{ $t('contact.mail') }}</p>
            <p class="text-base leading-7 text-gray-600 dark:text-gray-400">{{ $t('contact.title') }}</p>
            <a class="text-lg font-bold text-vsk-1" href="mailto:info@vasak.net.ar"
              >info@vasak.net.ar</a
            >
          </div>
          <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white dark:bg-gray-800 rounded-3xl shadow-main">
            <span>
              <FontAwesomeIcon icon="phone" class="text-4xl text-vsk-2" />
            </span>
            <p class="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{{ $t('contact.form.phone') }}</p>
            <a href="https://t.me/PatoJAD" class="text-base leading-7 text-gray-600 dark:text-gray-400">https://t.me/PatoJAD</a>
            <a class="text-lg font-bold text-vsk-1" href="tel:+54 9 11 6010-9950"
              >+54 9 11 6010-9950</a
            >
          </div>
          <div class="flex flex-col items-center gap-3 px-8 py-10 bg-white dark:bg-gray-800 rounded-3xl shadow-main">
            <span>
              <FontAwesomeIcon icon="location-dot" class="text-4xl text-vsk-2" />
            </span>
            <p class="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{{ $t('contact.address') }}</p>
            <p class="text-base leading-7 text-gray-600 dark:text-gray-400">Oporto, Portugal</p>
            <a
              class="text-lg font-bold text-vsk-1"
              target="_blank"
              href="https://www.google.com/maps?ll=-4.76565,-45.61525&z=3&t=m&hl=es-419&gl=AR&mapclient=embed&cid=10248941223314270580"
              >Europa</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
