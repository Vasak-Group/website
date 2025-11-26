<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HeadTitleSection from '../components/sections/HeadTitleSection.vue';
import { useData } from 'vitepress'

const { frontmatter, page } = useData()

</script>

<template>
    <HeadTitleSection :title="frontmatter.title" />

    <section class="py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap content-center justify-center gap-4">
                <a v-for="(t, i) in page.frontmatter.tools" :key="i" :href="t.url" target="_blank"
                    rel="noopener noreferrer"
                    class=" bg-slate-200 dark:bg-slate-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow hover:text-primary transition aspect-square w-56">
                    <div class="text-[80px]">
                        <FontAwesomeIcon :icon="t.icon" />
                    </div>
                    <div class="text-sm font-medium text-center">{{ t.title }}</div>
                </a>
            </div>
        </div>
    </section>
</template>