<template>
    <section id="about" class="pt-100">
        <div class="about-section">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="about-img-wrapper">
                            <div class="about-img position-relative d-inline-block wow fadeInLeft" data-wow-delay=".3s"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                <img alt="" src="/img/services/consultas.svg" style="max-width: 100%;">
                                <div class="about-experience">
                                    <h3>{{ yearsOfExperience() }} Años de Experiencia</h3>
                                    <p>Ya con {{ yearsOfExperience() }} años trabajando entre juntos para cumplir tus
                                        sueños.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="about-content-wrapper">
                            <div class="section-title">
                                <span class="wow fadeInUp" data-wow-delay=".2s"
                                    style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                    Sobre Nosotros
                                </span>
                                <h2 class="mb-40 wow fadeInRight" data-wow-delay=".4s"
                                    style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;">
                                    Mas sobre <span class="vsk-font" style="font-size: 35px;">Vasak Group</span>
                                </h2>
                            </div>
                            <div class="about-content">
                                <p class="mb-45 wow fadeInUp" data-wow-delay=".6s"
                                    style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                                    El crecimiento lo obtenemos juntos, nosotros pensamos en vos y vos pensas en nostros.
                                    Somos una empresa que nace con el fin de brindar al cliente las soluciones adecuadas a
                                    sus inconvenientes.
                                </p>
                                <div class="counter-up wow fadeInUp" data-wow-delay=".5s"
                                    style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                                    <div class="counter">
                                        <span id="secondo" class="countup count color-2" :cup-end=projects cup-append="+">
                                            {{ projects }}
                                        </span>
                                        <h4>Proyectos Finalizados</h4>
                                        <p>
                                            Que mejoraran la calidad de nuestros
                                            <br class="d-none d-md-block d-lg-none d-xl-block">
                                            clientes
                                        </p>
                                    </div>
                                    <div class="counter">
                                        <span id="secondo" class="countup count color-1" :cup-end=clients cup-append="+">
                                            {{ clients }}
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

<script>
import clients from '../../data/clients.json';
import projects from '../../data/projects.json';
export default {
    name: "AboutHome",
    data() {
        return {
            clients: clients.length,
            projects: projects.length
        };
    },
    methods: {
        yearsOfExperience() {
            let start = 2019;
            let end = new Date().getFullYear();
            let years = end - start;
            return years;
        },
    },
    mounted() {
        // console.log("Component mounted!");
    },
}
</script>

<style></style>