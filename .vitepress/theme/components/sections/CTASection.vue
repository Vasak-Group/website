<script lang="ts" setup>
const props = defineProps<{
    title?: string
    description?: string
    ctalink?: string
    ctatitle?: string
}>()
</script>

<template>
    <section class="p-32 text-center">
        <h2 class="text-3xl font-bold mb-8 text-primary">
            {{ props.title ?? '¿Listo para comenzar?' }}
        </h2>
        <p class="text-lg max-w-2xl mx-auto">
            {{ props.description ?? '' }}
        </p>
        <p class="mt-14">
            <a :href="props.ctalink ?? '/contact'"
                class="font-medium rounded-xl text-slate-50 vsk-gradient hover:bg-secondary px-16 py-4">
                {{ props.ctatitle ?? 'Contacto' }}
            </a>
        </p>
    </section>
</template>