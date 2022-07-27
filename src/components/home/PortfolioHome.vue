<template>
    <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Portfolio</h2>
                <h3>Revisa nuestros <span>Trabajos</span></h3>
                <p>Revisa algunos de nuestros trabajos realizados para nuestros clientes</p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" class="filter-active">All</li>
                        <li data-filter=".App">App</li>
                        <li data-filter=".WebApp">WebApp</li>
                        <li data-filter=".Web">Web</li>
                    </ul>
                </div>
            </div>

            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                <div v-for="project in projects" :key="project.id"
                    :class="'col-lg-4 col-md-6 portfolio-item ' + project.type">
                    <ProjectComponent v-bind="project" />
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import projects from '../../data/projects.json';
import ProjectComponent from './components/ProjectComponent.vue';
export default {
    data() {
        return {
            projects: projects.filter(project => project.show)
        };
    },
    components: { ProjectComponent }
}
</script>

<style>
</style>