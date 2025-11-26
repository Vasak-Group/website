<script lang="ts" setup>
import { useData } from 'vitepress'

const props = defineProps<{ title?: string }>()

// fallback to site.title when no prop provided
const { site } = useData()
const title = props.title || site.value?.title || 'Title'
</script>
<template>
    <section class="flex vsk-gradient justify-center items-center h-[500px]">
        <h1 class="text-5xl font-bold">{{ title }}</h1>
    </section>
</template>