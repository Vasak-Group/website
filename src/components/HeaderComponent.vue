<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import HeaderButtom from "@/components/header/HeaderButtom.vue";
import HeaderDropdown from "@/components/header/HeaderDropdown.vue";
import LangSelector from "@/components/global/LangSelector.vue";
import ThemeToggle from '@/components/global/ThemeToggle.vue';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  // @ts-ignore
} from "@headlessui/vue";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/vue/20/solid";

export default defineComponent({
  name: "HeaderComponent",
  data() {
    return {
      links: [
        { name: "navbar.home", href: "/", simple: true },
        { name: "navbar.about", href: "/about", simple: true },
        { name: "navbar.services", href: "/service", simple: true,
          links: [
            { name: "services.web.title", href: "/service/web", simple: true },
          ],
          footerLinks: [
            { name: "services.web.title", href: "/service/web", simple: true },
          ],
        },
        { name: "navbar.contact", href: "/contact", simple: true },
      ],
      products: [
        {
          name: "Analytics",
          description: "Get a better understanding of your traffic",
          href: "#",
          icon: ChartPieIcon,
        },
        {
          name: "Engagement",
          description: "Speak directly to your customers",
          href: "#",
          icon: CursorArrowRaysIcon,
        },
        {
          name: "Security",
          description: "Your customers’ data will be safe and secure",
          href: "#",
          icon: FingerPrintIcon,
        },
        {
          name: "Integrations",
          description: "Connect with third-party tools",
          href: "#",
          icon: SquaresPlusIcon,
        },
        {
          name: "Automations",
          description: "Build strategic funnels that will convert",
          href: "#",
          icon: ArrowPathIcon,
        },
      ],
      callsToAction: [
        { name: "Watch demo", href: "#", icon: PlayCircleIcon },
        { name: "Contact sales", href: "#", icon: PhoneIcon },
      ],
      mobileMenuOpen: false,
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
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    ArrowPathIcon,
    XMarkIcon,
    Bars3Icon,
  },
});
</script>

<template>
  <header class="sticky top-0 bg-white dark:bg-gray-800 rounded-b-xl z-50">
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
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <template v-for="link in links" :key="link.href">
          <HeaderButtom v-if="link.simple" :link="link.href" :title="link.name" />
          <template v-else>
            <HeaderDropdown :link="link.href" :title="link.name" :links="link.links" :footerLinks="link.footerLinks" />
          </template>
        </template>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <LangSelector />
        <ThemeToggle />
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Vasak Group</span>
            <img
              class="h-8 w-auto"
              src="/img/logo.svg"
              alt="Vasak Logo"
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="open">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...products, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Features</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Marketplace</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Company</a
              >
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
  <!--<header class="header navbar-area">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            <RouterLink class="navbar-brand" to="/">
              <img src="/img/logo.svg" alt="Logo" />
            </RouterLink>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <em class="fa fa-bars"></em>
            </button>

            <div
              class="collapse navbar-collapse sub-menu-bar"
              id="navbarSupportedContent"
            >
              <ul id="nav" class="navbar-nav ms-auto">
                <li class="nav-item">
                  
                </li>
                <li class="nav-item">
                  
                </li>
                <li class="nav-item">
                  <RouterLink
                    @click="unshow"
                    class="nav-link scrollto"
                    to="/service"
                  >
                    {{ $t("navbar.services") }}
                  </RouterLink>
                  <ul class="sub-menu">
                    <li class="nav-item">
                      <RouterLink @click="unshow" to="/service/web">
                        {{ $t("services.web.title") }}
                      </RouterLink>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <RouterLink
                    @click="unshow"
                    class="nav-link scrollto"
                    to="/contact"
                  >
                    {{ $t("navbar.contact") }}
                  </RouterLink>
                </li>
                <LangSelector />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>-->
</template>

<style scoped>
svg {
  height: 20px;
}

button.dropdown-toggle {
  width: 50px;
}

.dropdown-menu {
  width: 100px;
}
</style>
