<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type ThemePref = 'light' | 'dark' | 'system'
const STORAGE_KEY = 'theme-preference'

const pref = ref<ThemePref>('system')
let mq: MediaQueryList | null = null

function applyTheme(value: ThemePref) {
    if (value === 'system') {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        applyToDom(prefersDark, value)
    } else if (value === 'dark') {
        applyToDom(true, value)
    } else {
        applyToDom(false, value)
    }
}

function applyToDom(isDark: boolean, rawPref: ThemePref) {
    const html = document.documentElement
    const body = document.body

    // class-based support (Tailwind 'class' strategy)
    if (isDark) {
        html.classList.add('dark')
        body.classList.add('dark')
    } else {
        html.classList.remove('dark')
        body.classList.remove('dark')
    }

    // attribute-based support for custom CSS selectors
    try {
        html.setAttribute('data-theme', rawPref)
        html.setAttribute('data-theme-effective', isDark ? 'dark' : 'light')
        body.setAttribute('data-theme', rawPref)
        body.setAttribute('data-theme-effective', isDark ? 'dark' : 'light')
    } catch (e) { }
}

function savePref(value: ThemePref) {
    pref.value = value
    try { localStorage.setItem(STORAGE_KEY, value) } catch { }
    applyTheme(value)
}

function cyclePref() {
    const order: ThemePref[] = ['light', 'dark', 'system']
    const idx = order.indexOf(pref.value)
    const next = order[(idx + 1) % order.length]
    savePref(next)
}

function handleSystemChange(e: MediaQueryListEvent) {
    if (pref.value !== 'system') return
    applyToDom(e.matches, pref.value)
}

onMounted(() => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY) as ThemePref | null
        if (stored === 'light' || stored === 'dark' || stored === 'system') pref.value = stored
    } catch { }

    // set initial
    applyTheme(pref.value)

    if (window.matchMedia) {
        mq = window.matchMedia('(prefers-color-scheme: dark)')
        // listen for changes only to update when pref === 'system'
        if (mq.addEventListener) mq.addEventListener('change', handleSystemChange)
        else mq.addListener(handleSystemChange)
    }
})

onBeforeUnmount(() => {
    if (!mq) return
    if (mq.removeEventListener) mq.removeEventListener('change', handleSystemChange)
    else mq.removeListener(handleSystemChange)
})
</script>

<template>
    <button @click="cyclePref" :aria-label="`Cambiar tema (actual: ${pref})`"
        class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg bg-white/90 dark:bg-slate-800/80 flex items-center justify-center hover:scale-105 transition-transform"
        title="Cambiar tema (clic para alternar: claro → oscuro → sistema)">
        <template v-if="pref === 'light'">
            <!-- Sun icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-yellow-500" viewBox="0 0 24 24" fill="none"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M18.364 18.364l-1.414-1.414M7.05 7.05L5.636 5.636M12 7a5 5 0 100 10 5 5 0 000-10z" />
            </svg>
        </template>
        <template v-else-if="pref === 'dark'">
            <!-- Moon icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-indigo-300" viewBox="0 0 24 24" fill="none"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
        </template>
        <template v-else>
            <!-- System icon (monitor) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-slate-700 dark:text-slate-200"
                viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 7h20v10H2zM8 21h8" />
            </svg>
        </template>
    </button>
</template>

<style scoped>
/* ensure button is above other fixed elements */
.fixed {
    backdrop-filter: blur(4px);
}
</style>
