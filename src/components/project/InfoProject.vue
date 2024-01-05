<template>
  <div class="sidebar-wrapper my-5">
    <h2 class="text-vsk-1 text-4xl mb-10 font-medium title-font">{{ name }}</h2>
    <p class="leading-relaxed mb-10 text-xl text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
    <div class="p-3">
      <ul class="text-xl">
        <li class="mb-4">
          <span class="ml-4 font-bold text-gray-800 dark:text-gray-100">Client:</span>
          <span class="ml-4 text-gray-600 dark:text-gray-400">{{ clientObject.name }}</span>
        </li>
        <li class="mb-4">
          <span class="ml-4 font-bold text-gray-800 dark:text-gray-100">Categoria:</span>
          <span class="ml-4 text-gray-600 dark:text-gray-400">{{ type }}</span>
        </li>
        <li class="mb-4">
          <span class="ml-4 font-bold text-gray-800 dark:text-gray-100">URL:</span>
          <span class="ml-4 text-gray-600 dark:text-gray-400"
            ><a :href="sanitizeUrl(url)">{{ url }}</a></span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import clients from '@/data/clients';
import { defineComponent } from 'vue';
import { sanitizeUrl } from '@braintree/sanitize-url';

export default defineComponent({
  name: 'InfoProject',
  props: {
    type: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    client: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  computed: {
    clientObject() {
      return clients.find((clientd) => clientd.id === this.client) || { name: '' };
    }
  },
  methods: {
    sanitizeUrl
  },
  data() {
    return {
      clients
    };
  }
});
</script>
