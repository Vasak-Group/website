<script lang="ts" setup>
import { useData } from 'vitepress'
const { site } = useData()
</script>

<template>
    <nav class="my-4 flex items-center justify-between mx-4 rounded-xl p-4 bg-slate-100 dark:bg-slate-900">
        <div class="text-lg font-bold">
            <a href="/">{{ site.title }}</a>
        </div>
        <div>
            <a v-for="navItem in site.themeConfig.nav" :key="navItem.text" :href="navItem.link"
                class="mx-2 hover:underline">
                {{ navItem.text }}
            </a>
        </div>
    </nav>
</template>