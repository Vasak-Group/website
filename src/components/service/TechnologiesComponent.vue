<script setup lang="ts">
import techs from '../../data/techs.json';
import { defineComponent, onMounted } from 'vue';
import { tns } from 'tiny-slider';

onMounted(() => {
    tns({
        container: '#tns1-ow',
        items: 4,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        gutter: 20,
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 4,
            },
        },
    });
});

defineComponent({
    name: 'TechnologiesComponent',
    data() {
        return {
            techs
        }
    }
})
</script>

<template>
    <section id="technology" class="teams">
        <div class="container text-center">
            <div class="client-logo-wrapper">

                <div class="tns-outer" id="tns1-ow">
                    <div class="client-logo tns-item" v-for="tech in techs" :key="tech.name" >
                        <img :src="tech.img" :alt="tech.name" class="img-fluid tech-img" loading="lazy">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style>
#technology{
    padding: 100px 0;
}

.tech-img {
    height: 100px;
    margin: 15px;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    transition:0.3s scale;
}

.tech-img:hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    scale: 1.3;
    transition:0.5s scale;
}
</style>