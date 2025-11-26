<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import techList from '../../../../../site/data/technologies.json'

type Tech = { name: string; image: string }
const technologies = techList as Tech[]

const track = ref<HTMLElement | null>(null)
// autoplay
const intervalMs = 3000
let timer: number | null = null

function startAutoplay() {
    if (timer != null) return
    timer = window.setInterval(() => {
        scrollNext()
    }, intervalMs)
}

function stopAutoplay() {
    if (timer != null) {
        clearInterval(timer)
        timer = null
    }
}

onMounted(() => {
    // start autoplay unless user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    startAutoplay()
})

onBeforeUnmount(() => stopAutoplay())

function scrollNext() {
    if (!track.value) return
    const step = Math.round(track.value.clientWidth * 0.6)
    const maxScroll = Math.max(0, track.value.scrollWidth - track.value.clientWidth)
    const nextPos = track.value.scrollLeft + step
    const epsilon = 8
    if (nextPos >= maxScroll - epsilon) {
        // reached (or near) end -> loop to start
        track.value.scrollTo({ left: 0 })
        return
    }
    track.value.scrollBy({ left: step, behavior: 'smooth' })
}

function scrollPrev() {
    if (!track.value) return
    const step = Math.round(track.value.clientWidth * 0.6)
    const maxScroll = Math.max(0, track.value.scrollWidth - track.value.clientWidth)
    const prevPos = track.value.scrollLeft - step
    const epsilon = 8
    if (prevPos <= epsilon) {
        // near or at start -> loop to end
        track.value.scrollTo({ left: maxScroll })
        return
    }
    track.value.scrollBy({ left: -step, behavior: 'smooth' })
}
</script>

<template>
    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-between mb-4">
            </div>

            <div class="relative">
                <button @click="scrollPrev" aria-label="Anterior"
                    class="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-slate-50/80 dark:bg-slate-950/70 shadow-md flex items-center justify-center hover:bg-primary/60">
                    <span class="text-2xl font-bold">‹</span>
                </button>

                <div ref="track" class="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory touch-pan-y no-scrollbar"
                    @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
                    <div v-for="(t, i) in technologies" :key="i"
                        class="flex-none snap-start flex items-center justify-center">
                        <div
                            class="w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-xl bg-slate-100 dark:bg-slate-900 shadow-lg flex flex-col items-center justify-center">
                            <img :src="t.image" :alt="t.name" class="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2" />
                            <div class="text-sm text-center">{{ t.name }}</div>
                        </div>
                    </div>
                </div>

                <button @click="scrollNext" aria-label="Siguiente"
                    class="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-slate-50/80 dark:bg-slate-950/70 shadow-md flex items-center justify-center hover:bg-primary/60">
                    <span class="text-2xl font-bold">›</span>
                </button>
            </div>
        </div>
    </section>
</template>

<!-- styles are handled via Tailwind classes -->
<style scoped>
/* hide horizontal scrollbar while preserving accessibility */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>