<template>
    <section id="about" class="pt-100">
        <div class="about-section">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="about-img-wrapper">
                            <div class="about-img position-relative d-inline-block">
                                <img alt="" src="/img/services/consultas.svg" style="max-width: 100%;" loading="lazy" />
                                <div class="about-experience">
                                    <h3>{{ yearsOfExperience() }} Años de Experiencia</h3>
                                    <p>Ya con {{ yearsOfExperience() }} años trabajando juntos para cumplir tus
                                        sueños.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="about-content-wrapper">
                            <div class="section-title">
                                <span>{{ $t('about.title') }}</span>
                                <h2 class="mb-40">
                                    {{ $t('about.question') }} <span class="vsk-font" style="font-size: 35px;">Vasak Group</span>
                                </h2>
                            </div>
                            <div class="about-content">
                                <p class="mb-45">{{ $t('about.answer') }}</p>
                                <div class="counter-up">
                                    <div class="counter">
                                        <span id="secondo" class="countup count color-2" :cup-end=projectsNumber cup-append="+">
                                            {{ projectsNumber }}
                                        </span>
                                        <h4>Proyectos Finalizados</h4>
                                        <p>
                                            Que mejoraran la calidad de nuestros
                                            <br class="d-none d-md-block d-lg-none d-xl-block">
                                            clientes
                                        </p>
                                    </div>
                                    <div class="counter">
                                        <span id="secondo" class="countup count color-1" :cup-end=clientsNumber cup-append="+">
                                            {{ clientsNumber }}
                                        </span>
                                        <h4>Clientes que nos eligen</h4>
                                        <p>Que nos siguen eligiendo para<br class="d-none d-md-block d-lg-none d-xl-block">
                                            trabajar en conjunto</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import clients from '@/data/clients.json';
import projects from '@/data/projects.json'; 
import { defineComponent } from 'vue';

function yearsOfExperience() {
    const start = 2019;
    const end = new Date().getFullYear();
    const years = end - start;
    return years;
}

const clientsNumber = clients.length
const projectsNumber= projects.length

defineComponent({
    name: 'AboutComponent',
    data() {
        return {
            yearsOfExperience,
            clientsNumber,
            projectsNumber
        }
    }
});
</script>

<style scoped>
#about, .about-section {
    background-color: var(--bg-site-1);
}
</style>