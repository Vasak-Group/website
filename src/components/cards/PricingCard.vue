<template>
    <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="single-pricing mb-50" :class="class">
            <h4>{{ $t(nombre) }}</h4>
            <h3><em :class="icon"></em></h3>
            <ul>
                <li v-for="caracteristica in caracteristicas" :key="caracteristica.id" :class="caracteristica.class">
                    {{ $t(caracteristica.desc) }}
                </li>
            </ul>
            <a :href="url" class="theme-btn border-btn">{{ $t('home.plans.button') }}</a>
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
        },
        class: {
            type: String,
            required: true
        }
    }
}
</script>

<style></style>