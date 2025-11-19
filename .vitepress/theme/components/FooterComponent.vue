<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useData } from 'vitepress'
const { site, theme } = useData()
</script>

<template>
    <footer
        class="my-8 text-center text-sm text-slate-500 dark:text-slate-400 mx-4 rounded-xl p-4 bg-slate-100 dark:bg-slate-900">
        <p>
            &copy; {{ new Date().getFullYear() }} {{ site.title }}. All rights reserved.
        </p>
        <p class="mt-2">
            <a v-for="social in theme.socialLinks" :key="social.icon" :href="social.link" target="_blank"
                rel="noopener noreferrer" class="mx-2 text-slate-600 dark:text-slate-300 hover:text-primary text-xl">
                <FontAwesomeIcon :icon="['fab', social.icon]" />
            </a>
        </p>
    </footer>
</template>