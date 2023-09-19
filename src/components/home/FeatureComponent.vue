<template>
    <section id="feature" class="feature-section pt-130 pb-130">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-9 mx-auto">
                    <div class="section-title text-center mb-55">
                        <span>{{ $t('home.features.feature') }}</span>
                        <h2>{{ $t('home.features.question') }}</h2>
                        <p>{{ $t('home.features.answer') }}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <FeatureCard v-for="featured in featureds" :key="featured.id" v-bind="featured" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import featureds from '../../data/features.json';
import FeatureCard from '../cards/FeatureCard.vue';

defineComponent({
    name: 'FeatureComponent',
    components: {
        FeatureCard,
    },
    setup() {
        return {
            featureds,
        };
    },
});
</script>

<style></style>