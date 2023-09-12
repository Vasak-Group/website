import component from '../../../../chirola/src/shims-vue';
<template>
    <div>
        <div class="single-team text-center mb-40">
            <div class="team-img ratio ratio-1x1">
                <img :alt="name" :title="name" :src="image" loading="lazy">
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
