<template>
    <div class="col-lg-4 col-md-6 grid-item branding" :class="type">
        <div class="portfolio-item-wrapper">
            <div class="portfolio-img">
                <img :src="image" :alt="name" :title="name" />
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

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
img {
    border-radius: var(--border-radius);
}
</style>