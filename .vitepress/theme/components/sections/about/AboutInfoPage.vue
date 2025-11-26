<script lang="ts" setup>
import { useData } from 'vitepress';
import InfoCardSection from '../cards/InfoCardSection.vue';

const { page } = useData()
</script>

<template>
    <InfoCardSection v-for="(feature, i) in page.frontmatter.info" :key="i" :feature="feature" :index="i" />
</template>