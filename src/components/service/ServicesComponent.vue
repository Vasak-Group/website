<template>
    <section id="service" class="service-section pt-130 pb-80">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-9 mx-auto">
                    <div class="section-title text-center mb-55">
                        <span class="wow fadeInDown" data-wow-delay=".2s"
                            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">
                            Servicios
                        </span>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s"
                            style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                            Conocé nuestros Servicios
                        </h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s"
                            style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                            Conocé los servicios que podemos ofrecerte. Todos y cada uno de ellos se adaptan a tus
                            necesidades
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">

                <div v-for="service in services" :key="service.id" class="col-lg-4 col-md-6">
                    <div class="service-box box-style">
                        <div class="service-icon box-icon-style">
                            <i :class="service.icon"></i>
                        </div>
                        <div class="box-content-style service-content">
                            <h4>{{ service.title }}</h4>
                            <p>{{ service.description }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import services from '../../data/services.json'
import { defineComponent } from 'vue';

defineComponent( {
    name: 'ServicesComponent',
})
</script>

<style></style>