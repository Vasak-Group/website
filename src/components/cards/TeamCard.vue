<template>
    <div>
        <div class="single-team text-center mb-40">
            <div class="team-img ratio ratio-1x1">
                <img :alt="name" :title="name" :src="image" loading="lazy">
                <div class="team-social">
                    <ul>
                        <li v-for="red in social" :key="red.id">
                            <a :href="sanitizeUrl(red.url)"><i :class="red.icon"></i></a>
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

<script setup lang="ts">
import { defineComponent } from 'vue'
import { Social } from '@/types/TeamMember';
import { sanitizeUrl } from '@braintree/sanitize-url';

defineProps({
    name: {
        type: String
    },
    image: {
        type: String
    },
    position: {
        type: String
    },
    social: {
        type: Array as () => Social[]
    },
})

defineComponent({
    name: 'TeamCard',
});
</script>
