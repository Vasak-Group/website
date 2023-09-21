<template>
    <section class="portfolio-section pt-130 pb-100">
        <div id="container" class="container">
            <div class="row align-items-end">
                <div class="col-xl-6 col-lg-6">
                    <div class="section-title mb-60">
                        <span>{{ $t('portfolio.title') }}</span>
                        <h2>{{ $t('portfolio.question') }}</h2>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="section-title mb-60">
                        <p>{{ $t('portfolio.answer') }}</p>
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

                <ProjectCard 
                    v-for="project in viewProjects()"
                    :key="project.id"
                    :id="project.id"
                    :name="project.name"
                    :image="project.image"
                    :type="project.type" />

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import projects from '../../data/projects.json';
import ProjectCard from '../cards/ProjectCard.vue';
import { defineComponent } from 'vue';


function viewProjects(){
    const showers = projects.filter(project => project.show);
    const shuffled = showers.sort(function () { return .5 - Math.random() });
    return shuffled.slice(0, 6);
}

defineComponent({
    name: 'PortfolioComponent',
    components: { ProjectCard }
})
</script>

<style scoped>
.portfolio-section {
    background-color: var(--bg-site-2);
}
</style>