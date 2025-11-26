<script lang="ts" setup>
import AboutInfoPage from '../components/sections/about/AboutInfoPage.vue';
import TechnologiesSection from '../components/sections/general/TechnologiesSection.vue';
import HeadTitleSection from '../components/sections/HeadTitleSection.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <HeadTitleSection :title="frontmatter.title" />
    <AboutInfoPage />
    <TechnologiesSection />
</template>