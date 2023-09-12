<template>
    <section id="hero" class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-5 col-lg-6 text-center">
                    <div class="hero-content-wrapper">
                        <h2 class="mb-25">
                            Bienvenidos a
                        </h2>
                        <h1 class="pb-35 vsk-font">
                            Vasak Group
                        </h1>
                        <p class="mb-35">
                            Nuestra empresa se especializa en el desarrollo de software personalizado, incluyendo aplicaciones web y móviles, utilizando las metodologías ágiles más actuales. Además, ofrecemos soluciones de staff augmentation para potenciar la productividad e innovación de tu proyecto.
                        </p>
                        <RouterLink to="/contact" class="theme-btn">Conocenos</RouterLink>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-6">
                    <div class="hero-img">
                        <div class="d-inline-block hero-img-right">
                            <img class="image" src="/img/head.svg" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({
    name: 'HeroHome',
    components: {
        RouterLink,
    },
});
</script>

<style></style>