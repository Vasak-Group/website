<template>
    <div class="member bg-body">
        <div class="member-img">
            <img :src="image" class="img-fluid" :alt="name" :title="name" />
            <div class="social">
                <a v-for="red in social" :key="red.id" :href="red.url">
                    <em :class="red.icon"></em>
                </a>
            </div>
        </div>
        <div class="member-info">
            <h4 class="text-body-emphasis">{{ name }}</h4>
            <span class="text-body">{{ position }}</span>
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