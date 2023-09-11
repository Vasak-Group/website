<template>
    <div class="col-lg-4 col-md-6 grid-item branding" :class="type">
        <div class="portfolio-item-wrapper">
            <div class="portfolio-img">
                <img :src="image" :alt="name" :title="name" loading="lazy" />
            </div>
            <div class="portfolio-overlay">
                <div class="overlay-content">
                    <h4>{{ name }}</h4>
                    <p>{{ type }}</p>
                    <a :href="'/project/' + id" class="theme-btn border-btn">Ver</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineProps<
{
    id: string
    name: string
    type: string
    image: string
}
>()

defineComponent({
    name: 'ProjectComponent'
})
</script>

<style scoped>
img {
    border-radius: var(--border-radius);
}
</style>