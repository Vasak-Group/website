<script lang="ts" setup>
import { useData } from 'vitepress'
import PageFeatureSection from '../components/sections/PageFeatureSection.vue';
import CTASection from '../components/sections/CTASection.vue';
const { site } = useData()
const headSrc = '/img/head.svg'
</script>

<template>
    <section class="relative py-32 lg:py-36">
        <div
            class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block"><span
                    class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-primary blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span><span
                    class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-secondary blur-xl opacity-80"></span>
            </div>
            <span
                class="w-4/12 lg:w-2/12 aspect-square vsk-gradient absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
            <div
                class="relative flex flex-col items-center text-center align-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold vsk-text-gradient vsk-font">
                    {{ site.title }}
                </h1>
                <p class="mt-8 text-slate-700 dark:text-slate-300">
                    {{ site.description }}
                </p>
                <div class="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                    <div class="flex items-center justify-center sm:flex-row flex-col gap-5 w-full">
                        <a href="/about"
                            class="w-full sm:w-auto flex items-center justify-center px-3 py-3 border-transparent text-base font-medium rounded-xl text-white vsk-gradient hover:bg-secondary md:py-4 md:text-lg md:px-10">
                            Sobre Nosotros
                        </a>
                        <a href="/services"
                            class="w-full sm:w-auto flex items-center justify-center px-3 py-3 border-transparent text-base font-medium rounded-xl text-primary bg-slate-100 dark:bg-slate-900 hover:bg-primary hover:text-white md:py-4 md:text-lg md:px-10">
                            Servicios
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                <img :src="headSrc" alt="Hero image" loading="lazy"
                    class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96">
            </div>
        </div>
    </section>

    <PageFeatureSection />
    <CTASection title="¿Listo para transformar tus ideas en realidad?"
        description="En Vasak Group, estamos listos para ayudarte a alcanzar tus objetivos comerciales con soluciones de software a medida. Ya sea que necesites una plataforma personalizada, una aplicación móvil o una arquitectura de software escalable, tenemos la experiencia y la pasión para hacerlo posible."
        ctalink="/contact" ctatitle="Contactanos hoy mismo" />
</template>