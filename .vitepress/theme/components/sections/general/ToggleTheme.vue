<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
            <FontAwesomeIcon :icon="['fas', 'sun']" class="w-7 h-7 text-yellow-500" />
        </template>
        <template v-else-if="pref === 'dark'">
            <FontAwesomeIcon :icon="['fas', 'moon']" class="w-7 h-7 text-indigo-300" />
        </template>
        <template v-else>
            <FontAwesomeIcon :icon="['fas', 'desktop']" class="w-7 h-7 text-slate-700 dark:text-slate-200" />
        </template>
    </button>
</template>

<style scoped>
/* ensure button is above other fixed elements */
.fixed {
    backdrop-filter: blur(4px);
}
</style>
