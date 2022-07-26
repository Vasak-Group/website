<template>
    <div class="icon-box text-center" data-aos="fade-up" :data-aos-delay="delay">
        <div class="icon"><i :class="icon"></i></div>
        <h4 class="title"><a href="">{{ title }}</a></h4>
        <p class="description">{{ description }}</p>
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