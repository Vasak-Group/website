<template>
    <div class="col-3 t-card">
        <div class="single-team text-center mb-40 wow fadeInUp" data-wow-delay=".2s"
            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
            <div class="team-img ratio ratio-1x1">
                <img :alt="name" :title="name" :src="image">
                <div class="team-social">
                    <ul>
                        <li v-for="red in social" :key="red.id">
                            <a :href="red.url"><i :class="red.icon"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="team-info">
                <h4>{{ name }}</h4>
                <span>{{ position }}</span>
            </div>
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
    },
}
</script>

<style>
.t-card {
    max-width: 340px;
}
</style>