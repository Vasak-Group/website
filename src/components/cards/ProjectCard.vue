<template>
    <div class="col-6 col-lg-4 grid-item branding" :class="type">
        <div class="portfolio-item-wrapper">
            <div class="portfolio-img">
                <img :src="image" :alt="name" :title="name" loading="lazy" />
            </div>
            <div class="portfolio-overlay">
                <div class="overlay-content">
                    <h4>{{ name }}</h4>
                    <p>{{ type }}</p>
                    <RouterLink :to="sanitizeUrl('/project/' + id)" class="theme-btn border-btn">Ver</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { sanitizeUrl } from '@braintree/sanitize-url';

defineProps<
{
    id: number
    name: string
    type: string
    image: string
}
>()

defineComponent({
    name: 'ProjectCard',
    components: { RouterLink }
})
</script>

<style scoped>
img {
    border-radius: var(--border-radius);
}
</style>