<script lang="ts" setup>
import HeadTitleSection from '../components/sections/HeadTitleSection.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <HeadTitleSection :title="frontmatter.title" />
</template>