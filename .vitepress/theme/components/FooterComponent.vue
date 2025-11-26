<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useData } from 'vitepress'
const { site, theme } = useData()
</script>

<template>
    <footer
        class="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 mx-4 rounded-xl p-4 bg-slate-200 dark:bg-slate-900">
        <img src="/img/logo.svg" :alt="site.title" class="h-14 mb-2 inline-block" />

        <p class="mt-2">
            <a v-for="social in theme.socialLinks" :key="social.icon" :href="social.link" target="_blank"
                rel="noopener noreferrer" class="mx-2 text-slate-600 dark:text-slate-300 hover:text-primary text-xl">
                <FontAwesomeIcon :icon="['fab', social.icon]" />
            </a>
        </p>
    </footer>
    <div class="text-center my-4">
        <p>
            &copy; {{ new Date().getFullYear() }} <span class="vsk-text-gradient vsk-font">{{ site.title }}</span>. All
            rights reserved.
        </p>
    </div>

</template>