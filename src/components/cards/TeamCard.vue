<template>
  <div
    class="w-full bg-gray-200 dark:bg-gray-700 rounded-xl p-12 flex flex-col justify-center items-center"
  >
    <div class="mb-8">
      <img
        class="object-center object-cover rounded-full h-36 w-36"
        :alt="name"
        :title="name"
        :src="image"
        loading="lazy"
      />
    </div>
    <div class="text-center">
      <p class="text-xl text-gray-700 dark:text-gray-100 font-bold mb-2">{{ name }}</p>
      <p class="text-base text-gray-500 dark:text-gray-400 font-normal">{{ position }}</p>
      <div class="team-social">
        <div class="mt-2 mb-5 space-x-2">
          <template v-for="red  in social" :key="red.id">
            <a :href="sanitizeUrl((red as any).url)" class="text-vsk-1 hover:text-vsk-2"
              ><FontAwesomeIcon :icon="(red as any).icon" /></a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { sanitizeUrl } from '@braintree/sanitize-url';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'TeamCard',
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    social: {
      type: Array,
      required: true
    }
  },
  methods: {
    sanitizeUrl
  },
  components: {
    FontAwesomeIcon
  }
});
</script>
