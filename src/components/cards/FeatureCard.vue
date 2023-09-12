<template>
    <div class="col-lg-4 col-md-6">
        <div class="feature-box box-style">
            <div class="feature-icon box-icon-style">
                <i :class="icon"></i>
            </div>
            <div class="box-content-style feature-content">
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineProps<{
    icon: string
    title: string
    description: string
    delay: number
}>()

defineComponent({
    name: 'FeatureCard',
})
</script>

<style></style>