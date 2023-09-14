<template>
    <section id="hero" class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-5 col-lg-6 text-center">
                    <div class="hero-content-wrapper">
                        <h2 class="mb-25">
                            {{ $t('home.welcome') }}
                        </h2>
                        <h1 class="pb-35 vsk-font">
                            Vasak Group
                        </h1>
                        <p class="mb-35">{{ $t('home.headerText') }}</p>
                        <RouterLink to="/contact" class="theme-btn">{{ $t('home.knowUs') }}</RouterLink>
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