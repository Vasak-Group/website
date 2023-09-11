<template>
    <section class="portfolio-section pt-130 pb-100">
        <div id="container" class="container">
            <div class="row align-items-end">
                <div class="col-xl-6 col-lg-6">
                    <div class="section-title mb-60">
                        <span class="wow fadeInDown" data-wow-delay=".2s"
                            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">
                            Portfolio
                        </span>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s"
                            style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                            Revisa nuestros Trabajos
                        </h2>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="section-title mb-60">
                        <p class="wow fadeInUp" data-wow-delay=".4s"
                            style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                            Revisa algunos de nuestros trabajos realizados para nuestros clientes. Si deseas ver más de
                            nuestros trabajos, puedes visitar nuestro portafolio completo. Si deseas que te ayudemos con tu
                            proyecto, puedes contactarnos.
                        </p>
                    </div>
                </div>
            </div><!--
            <div class="row">
                <div class="col-12">
                    <div class="portfolio-btn-wrapper">
                        <button class="portfolio-btn active" data-filter="*">All</button>
                        <button class="portfolio-btn" data-filter=".App">App</button>
                        <button class="portfolio-btn" data-filter=".WebApp">WebApp</button>
                        <button class="portfolio-btn" data-filter=".Web">Web Design</button>
                    </div>
                </div>
            </div>-->
            <div class="row grid" style="position: relative; height: 777.75px;">

                <ProjectComponent v-for="project in viewProjects()" :key="project.id" v-bind="project" />

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import projects from '../../data/projects.json';
import ProjectComponent from '../cards/ProjectCard.vue';
import { defineComponent } from 'vue';


function viewProjects(){
    const showers = projects.filter(project => project.show);
    const shuffled = showers.sort(function () { return .5 - Math.random() });
    return shuffled.slice(0, 9);
}

defineComponent({
    name: 'PortfolioComponent',
    components: { ProjectComponent }
})
</script>

<style scoped>
.portfolio-section {
    background-color: var(--bg-site-2);
}
</style>