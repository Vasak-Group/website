<template>
    <div class="sidebar-wrapper">
        <div class="project-info-box mb-30">
            <h5 class="mb-20">{{ name }}</h5>
            <p class="mb-20">{{ description }}</p>
            <ul>
                <li>
                    <span class="destination"><strong>Client:</strong></span>
                    <span>{{ clients.find(clientd => clientd.id === client).name }}</span>
                </li>
                <li>
                    <span class="destination"><strong>Categoria</strong>:</span>
                    <span>{{ type }}</span>
                </li>
                <li>
                    <span class="destination"><strong>URL</strong>:</span>
                    <span><a :href="url">{{ url }}</a></span>
                </li>
            </ul>
        </div>
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

<style></style>