<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
// @ts-ignore
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "HeaderDropdown",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    links: {
      type: Array<any>(),
      required: true,
    },
    footerLinks: {
      type: Array<any>(),
      required: true,
    },
  },
  components: {
    RouterLink,
    Popover,
    PopoverButton,
    PopoverPanel,
    FontAwesomeIcon,
  },
})
</script>

<template>
  <Popover class="relative">
    <PopoverButton
      class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
    >
      <RouterLink :to="link">
      {{ title }}
      </RouterLink>
      <FontAwesomeIcon
        class="h-5 w-5 flex-none text-gray-400"
        aria-hidden="true"
        icon="fas fa-chevron-down"
      />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <PopoverPanel
        class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
      >
        <div class="p-4">
          <div
            v-for="item in links"
            :key="item.name"
            class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
          >
            <div
              class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
            >
              <component
                :is="item.icon"
                class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                aria-hidden="true"
              />
            </div>
            <div class="flex-auto">
              <a :href="item.href" class="block font-semibold text-gray-900">
                {{ item.name }}
                <span class="absolute inset-0" />
              </a>
              <p class="mt-1 text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          <a
            v-for="item in footerLinks"
            :key="item.name"
            :href="item.href"
            class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
            <component
              :is="item.icon"
              class="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
            {{ item.name }}
          </a>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
