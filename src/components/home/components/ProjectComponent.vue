<template>
    <img :src="image" class="img-fluid" :alt="name" :title="name" />
    <div class="portfolio-info">
        <h4>{{ name }}</h4>
        <p>{{ type }}</p>
        <a :href="image" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" :title="name">
            <em class="fa fa-plus"></em>
        </a>
        <RouterLink :to="'/project/' + id" class="details-link" title="More Details">
            <em class="fa fa-link"></em>
        </RouterLink>
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