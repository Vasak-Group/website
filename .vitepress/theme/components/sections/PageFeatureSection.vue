<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useData } from 'vitepress'

const { page } = useData()
</script>

<template>
    <section class="bg-slate-100 dark:bg-slate-900 py-24 sm:py-32">
        <div class="mx-auto px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
                <h2 class="text-base font-semibold text-secondary">{{ page.frontmatter.feature.title }}</h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    {{ page.frontmatter.feature.subtitle }}
                </p>
                <p class="mt-6 text-lg leading-8">
                    {{ page.frontmatter.feature.description }}
                </p>
            </div>
            <div class="mx-auto mt-16 sm:mt-20 lg:mt-24">
                <dl class="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    <div v-for="(feature, i) in (page.frontmatter && page.frontmatter.feature.features ? page.frontmatter.feature.features : [])"
                        :key="i" :id="`feature-${i}`"
                        class="relative pl-20 bg-slate-50 dark:bg-slate-950 rounded-xl p-6">
                        <dt class="text-base font-semibold text-gray-900 dark:text-gray-100">
                            <div
                                class="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                <FontAwesomeIcon :icon="['fas', feature.icon]" class="h-6 w-6 text-white" />
                            </div>
                            {{ feature.title }}
                        </dt>
                        <dd class="mt-2 text-base text-gray-600 dark:text-gray-400">
                            {{ feature.details }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>
</template>