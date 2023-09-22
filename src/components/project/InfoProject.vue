<template>
    <div class="sidebar-wrapper">
        <div class="project-info-box mb-30">
            <h5 class="mb-20">{{ name }}</h5>
            <p class="mb-20">{{ description }}</p>
            <ul>
                <li>
                    <span class="destination"><strong>Client:</strong></span>
                    <span>{{ clientObject.name }}</span>
                </li>
                <li>
                    <span class="destination"><strong>Categoria</strong>:</span>
                    <span>{{ type }}</span>
                </li>
                <li>
                    <span class="destination"><strong>URL</strong>:</span>
                    <span><a :href="sanitizeUrl(url)">{{ url }}</a></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import clients from '@/data/clients.json';
import { defineComponent } from 'vue';
import { sanitizeUrl } from '@braintree/sanitize-url';

const props = defineProps<{
    type: string
    url: string
    client: number
    name: string
    description: string
}>()

const clientObject = clients.find(clientd => clientd.id === props.client) || {name: ''};

defineComponent( {
    name: 'InfoProject',
    data() {
        return {
            clients
        };
    }
})
</script>

<style></style>