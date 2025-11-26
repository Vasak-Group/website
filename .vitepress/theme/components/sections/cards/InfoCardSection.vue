<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
    feature: {
        pretitle: string
        title: string
        description: string
        image: string
    }
    index?: number
}>()

const isEven = computed(() => ((props.index ?? 0) % 2) === 0)
</script>

<template>
    <section
        :class="['w-full py-24 flex justify-center items-center', isEven ? 'flex-row' : 'flex-row-reverse bg-slate-100 dark:bg-slate-900']">
        <div class="max-w-3xl px-24 text-center">
            <span class="text-sm uppercase font-bold tracking-wider text-secondary">{{ props.feature.pretitle }}</span>
            <h2 class="text-2xl font-bold text-primary">{{ props.feature.title }}</h2>
            <p class="mt-4 text-base">{{ props.feature.description }}</p>
        </div>
        <div class="px-10">
            <img :src="props.feature.image" :alt="props.feature.title" class="mt-6 mx-auto max-w-md rounded-lg" />
        </div>
    </section>
</template>