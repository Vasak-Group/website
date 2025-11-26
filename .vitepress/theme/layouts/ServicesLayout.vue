<script lang="ts" setup>
import HeadTitleSection from '../components/sections/HeadTitleSection.vue'
import ServicesInfoPage from '../components/sections/services/ServicesInfoPage.vue';
import TechnologiesSection from '../components/sections/general/TechnologiesSection.vue';
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <HeadTitleSection :title="frontmatter.title" />
    <section class="w-full py-24 flex justify-center items-center text-center">
        <div class="max-w-3xl px-12">
            <h2 class="text-2xl font-bold text-primary">¿Qué hacemos para potenciar tu negocio?</h2>
            <p class="text-base mt-4">En <strong>Vasak Group</strong>, ofrecemos una amplia gama de servicios diseñados
                para
                llevar tu proyecto
                al siguiente
                nivel. Con las <strong>tecnologías más actuales</strong> y un enfoque personalizado, te ayudamos a
                destacar en el mundo
                digital</p>
        </div>
    </section>
    <ServicesInfoPage />
    <TechnologiesSection />
</template>