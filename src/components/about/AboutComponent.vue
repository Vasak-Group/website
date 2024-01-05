<template>
  <div class="overflow-hidden py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-vsk-2">{{ $t('about.title') }}</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-vsk-1 sm:text-4xl">
              {{ $t('about.question') }}
              <span
                class="family-vsk text-transparent bg-clip-text bg-gradient-to-bl from-vsk-2 to-vsk-1 font-vsk font-bold"
                >Vasak Group</span
              >
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {{ $t('about.answer') }}
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-400 lg:max-w-none"
            >
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900 dark:text-gray-100">
                  <div class="absolute left-1 top-1 h-5 w-5 text-vsk-1" aria-hidden="true">
                    {{ yearsOfExperience() }}+
                  </div>
                  {{ $t('about.years') }}
                </dt>
                {{ ' ' }}
                <dd class="inline">
                  {{ $t('about.yearsDescription', { years: yearsOfExperience() }) }}
                </dd>
              </div>
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900 dark:text-gray-100">
                  <div class="absolute left-1 top-1 h-5 w-5 text-vsk-1" aria-hidden="true">
                    {{ projectsNumber }}
                  </div>
                  {{ $t('about.proyects') }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ $t('about.proyectsDescription') }}</dd>
              </div>
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900 dark:text-gray-100">
                  <div class="absolute left-1 top-1 h-5 w-5 text-vsk-1" aria-hidden="true">
                    {{ clientsNumber }}+
                  </div>
                  {{ $t('about.clients') }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ $t('about.clientsDescription') }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img
          src="/img/services/consultas.svg"
          alt="About Us"
          class="w-[48rem] max-w-none rounded-xl drop-shadow-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="2432"
          height="1442"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import clients from '@/data/clients.json';
import projects from '@/data/projects';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutComponent',
  data() {
    return {
      clientsNumber: clients.length,
      projectsNumber: projects.length
    };
  },
  methods: {
    yearsOfExperience() {
      const start = 2019;
      const end = new Date().getFullYear();
      const years = end - start;
      return years;
    }
  }
});
</script>
