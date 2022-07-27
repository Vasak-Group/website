<template>
    <img :src="image" class="img-fluid" :alt="name" :title="name" />
    <div class="portfolio-info">
        <h4>{{ name }}</h4>
        <p>{{ type }}</p>
        <a :href="image" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link"
            :title="name"><i class="fa fa-plus"></i></a>
        <a href="portfolio-details.html" class="details-link" title="More Details"><i class="fa fa-link"></i></a>
    </div>
</template>

<script>
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
        id : {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
img{
    border-radius: var(--border-radius);
}
</style>