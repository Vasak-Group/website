<script lang="ts" setup>
import { useData } from 'vitepress'
const { site } = useData()
</script>

<template>
    <footer
        class="my-8 text-center text-sm text-slate-500 dark:text-slate-400 mx-4 rounded-xl p-4 bg-slate-100 dark:bg-slate-900">
        <p>
            &copy; {{ new Date().getFullYear() }} {{ site.title }}. All rights reserved.
        </p>
        <p>
            Built with
            <a href="https://vitepress.dev/" target="_blank" rel="noopener noreferrer"
                class="text-slate-600 dark:text-slate-300 underline">
                VitePress
            </a>
            .
        </p>
    </footer>
</template>