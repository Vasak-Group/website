<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'HeaderMobileDropdown',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    links: {
      type: Array<any>(),
      required: true
    },
    footerLinks: {
      type: Array<any>(),
      required: true
    }
  },
  components: {
    RouterLink,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    FontAwesomeIcon
  }
});
</script>

<template>
  <Disclosure as="div" class="-mx-3" v-slot="open">
    <DisclosureButton
      class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
      <RouterLink :to="link">
        {{ title }}
      </RouterLink>
      <FontAwesomeIcon
        :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
        aria-hidden="true"
        icon="fas fa-chevron-down"
      />
    </DisclosureButton>
    <DisclosurePanel class="mt-2 space-y-2">
      <DisclosureButton
        v-for="item in links"
        :key="item.name"
        as="a"
        :href="item.href"
        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >{{ item.name }}</DisclosureButton
      >
    </DisclosurePanel>
  </Disclosure>
</template>
