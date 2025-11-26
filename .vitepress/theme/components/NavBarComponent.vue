<script lang="ts" setup>
import { useData } from 'vitepress'
const { site } = useData()
</script>

<template>
    <nav
        class="m-4 flex items-center justify-between rounded-xl p-4 bg-slate-200 dark:bg-slate-900 z-50 absolute top-0 left-0 right-0 w-[calc(100%-32px)]">
        <div class="text-lg font-bold">
            <a href="/"><img src="/img/logo.svg" :alt="site.title" class="h-10"></a>
        </div>
        <div>
            <a v-for="navItem in site.themeConfig.nav" :key="navItem.text" :href="navItem.link"
                class="mx-2 hover:text-secondary font-medium">
                {{ navItem.text }}
            </a>
        </div>
    </nav>
</template>