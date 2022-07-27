<template>
    <div class="member">
        <div class="member-img">
            <img :src="image" class="img-fluid" :alt="name" :title="name" />
            <div class="social">
                <a v-for="red in social" :key="red.id" :href="red.url"><i :class="red.icon"></i></a>
            </div>
        </div>
        <div class="member-info">
            <h4>{{ name }}</h4>
            <span>{{ position }}</span>
        </div>
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
        position: {
            type: String,
            required: true
        },
        social: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
</style>