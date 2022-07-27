<template>
    <div class="portfolio-info">
        <h3>Project information</h3>
        <ul>
            <li><strong>Categoria</strong>: {{ type }}</li>
            <li><strong>Cliente</strong>: {{ clients.find(clientd => clientd.id === client).name }}</li>
            <li><strong>URL</strong>: <a :href="url">{{ url }}</a></li>
        </ul>
    </div>
    <div class="portfolio-description">
        <h2 class="text-center">{{ name }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script>
import clients from '../../data/clients.json';
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        client: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            clients
        };
    }
}
</script>

<style>
</style>