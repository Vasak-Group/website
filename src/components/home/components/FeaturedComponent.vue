<template>
    <div class="icon-box text-center bg-body" data-aos="fade-up" :data-aos-delay="delay">
        <div class="icon">
            <em :class="icon"></em>
        </div>
        <h4 class="title text-body-emphasis">{{ title }}</h4>
        <p class="text-body description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        delay: {
            type: Number,
            default: 100
        }
    }
}
</script>

<style>
</style>