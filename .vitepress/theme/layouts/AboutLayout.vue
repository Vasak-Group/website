<script lang="ts" setup>
import AboutInfoPage from '../components/sections/about/AboutInfoPage.vue';
import HeadTitleSection from '../components/sections/HeadTitleSection.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <HeadTitleSection :title="frontmatter.title" />
    <AboutInfoPage />
</template>