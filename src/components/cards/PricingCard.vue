<template>
    <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="single-pricing mb-50" :class="classStyle">
            <h4>{{ $t(nombre) }}</h4>
            <h3><em :class="icon"></em></h3>
            <ul>
                <li v-for="caracteristica in caracteristicas" :key="caracteristica.id" :class="caracteristica.classStyle">
                    {{ $t(caracteristica.desc) }}
                </li>
            </ul>
            <a :href="sanitizeUrl(url)" class="theme-btn border-btn">{{ $t('home.plans.button') }}</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { sanitizeUrl } from '@braintree/sanitize-url';

defineProps<{
    nombre: string;
    caracteristicas: Array<{
        id: number;
        desc: string;
        classStyle: string;
    }>;
    icon: string;
    url: string;
    classStyle: string;
}>();

defineComponent({
    name: 'PricingCard',
});
</script>

<style></style>