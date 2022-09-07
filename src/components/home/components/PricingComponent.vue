<template>
    <div class="box featured">
        <h3>{{ nombre }}</h3>
        <h4>
            <em :class="icon"></em>
        </h4>
        <ul>
            <li v-for="caracteristica in caracteristicas" :key="caracteristica.id" :class="caracteristica.class">
                {{ caracteristica.desc }}
            </li>
        </ul>
        <div class="btn-wrap">
            <a :href="url" class="btn-buy">Consultanos</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nombre: {
            type: String,
            required: true
        },
        caracteristicas: {
            type: Array,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
</style>