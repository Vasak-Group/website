<script lang="ts" setup>
import { useData } from 'vitepress';
import AboutInfoSection from './AboutInfoSection.vue';

const { page } = useData()
</script>

<template>
    <AboutInfoSection v-for="(feature, i) in page.frontmatter.info" :key="i" :feature="feature" :index="i" />
</template>