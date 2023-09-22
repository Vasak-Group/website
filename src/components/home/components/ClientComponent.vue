<template>
    <a :href="web" target="_blank">
        <img :src="logo" class="img-fluid" :alt="name" :title="name" loading="lazy" />
    </a>
</template>

<script>
export default {
    props: {
        web: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
</style>