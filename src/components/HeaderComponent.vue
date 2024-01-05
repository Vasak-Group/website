<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HeaderButtom from '@/components/header/HeaderButtom.vue';
import HeaderMobileButtom from '@/components/header/HeaderMobileButtom.vue';
import HeaderDropdown from '@/components/header/HeaderDropdown.vue';
import HeaderMobileDropdown from '@/components/header/HeaderMobileDropdown.vue';
import LangSelector from '@/components/global/LangSelector.vue';
import ThemeToggle from '@/components/global/ThemeToggle.vue';

export default defineComponent({
  name: 'HeaderComponent',
  data() {
    return {
      links: [
        { name: 'navbar.home', href: '/', simple: true },
        { name: 'navbar.about', href: '/about', simple: true },
        {
          name: 'navbar.services',
          href: '/service',
          simple: true,
          links: [{ name: 'services.web.title', href: '/service/web', simple: true }],
          footerLinks: [{ name: 'services.web.title', href: '/service/web', simple: true }]
        },
        { name: 'navbar.contact', href: '/contact', simple: true }
      ],
      mobileMenuOpen: false
    };
  },
  components: {
    RouterLink,
    HeaderButtom,
    HeaderDropdown,
    LangSelector,
    ThemeToggle,
    Dialog,
    DialogPanel,
    FontAwesomeIcon,
    HeaderMobileButtom,
    HeaderMobileDropdown
  }
});
</script>

<template>
  <header class="sticky top-0 bg-white dark:bg-gray-800 rounded-b-xl z-20 drop-shadow-lg">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-5 p-0">
          <span class="sr-only">Vasak Group</span>
          <img class="h-20 w-auto" src="/img/logo.svg" alt="Vasak Group Logo" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <FontAwesomeIcon icon="fas fa-bars" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <template v-for="link in links" :key="link.href">
          <HeaderButtom v-if="link.simple" :link="link.href" :title="link.name" />
          <HeaderDropdown
            v-else
            :link="link.href"
            :title="link.name"
            :links="link.links"
            :footerLinks="link.footerLinks"
          />
        </template>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <LangSelector />
        <ThemeToggle />
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 drop-shadow-lg"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Vasak Group</span>
            <img class="h-8 w-auto" src="/img/logo.svg" alt="Vasak Logo" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <FontAwesomeIcon icon="fas fa-xmark" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <template v-for="link in links" :key="link.href">
                <HeaderMobileButtom v-if="link.simple" :link="link.href" :title="link.name" />
                <HeaderMobileDropdown
                  v-else
                  :link="link.href"
                  :title="link.name"
                  :links="link.links"
                  :footerLinks="link.footerLinks"
                />
              </template>
            </div>
            <div class="py-6">
              <LangSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
