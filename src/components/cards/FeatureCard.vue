<template>
    <div class="col-lg-4 col-md-6">
        <div class="feature-box box-style">
            <div class="feature-icon box-icon-style">
                <i :class="icon"></i>
            </div>
            <div class="box-content-style feature-content">
                <h4>{{ $t(title) }}</h4>
                <p>{{ $t(description) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineProps({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

defineComponent({
    name: 'FeatureCard',
})
</script>

<style></style>