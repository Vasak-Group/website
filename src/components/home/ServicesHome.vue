<template>
    <section id="services" class="services">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Servicios</h2>
                <h3>Conocé nuestros <span>Servicios</span></h3>
                <p>Conocé los servicios que podemos ofrecerte. Todos y cada uno de ellos se adaptan a tus necesidades
                </p>
            </div>

            <div class="row">

                <div v-for="service in services" :key="service.id" class="col-lg-4 col-md-6 d-flex align-items-stretch"
                    data-aos="zoom-in" :data-aos-delay="service.delay">
                    <div class="icon-box">
                        <div class="icon"><i :class="service.icon"></i></div>
                        <h4><a href="">{{ service.title }}</a></h4>
                        <p>{{ service.description }}</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import services from '../../data/services.json'
export default {
    name: 'ServicesHome',
    data() {
        return {
            services: services
        }
    }
}
</script>

<style>
</style>