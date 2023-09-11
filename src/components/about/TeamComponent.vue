<template>
    <section id="team" class="team-section img-bg pt-130">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-7 mx-auto">
                    <div class="section-title text-center mb-60">
                        <span v-scroll-reveal.reset>
                            Equipo
                        </span>
                        <h2 v-scroll-reveal.reset>
                            Conocé a nuestro equipo
                        </h2>
                        <p v-scroll-reveal.reset>
                            Conocé a las personas que hacen posible todo esto. Y se preocupan por hacer crecer tus
                            proyectos.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row teams-slider" v-scroll-reveal.reset>

                <TeamCard v-for="member in vskteam" v-bind:key="member.id" v-bind="member" />

            </div>
        </div>
    </section>
</template>

<script setup>
import team from '../../data/team.json'
import TeamCard from '../cards/TeamCard.vue'

import { tns } from "tiny-slider/src/tiny-slider"
import { createScrollRevealDirective } from 'vue-scroll-reveal'; 
import { onMounted } from "vue"

const vScrollReveal = createScrollRevealDirective({
    delay: 100,
    duration: 1500,
});

onMounted(() => {
    tns({
        container: '.teams-slider',
        items: 4,
        speed: 400,
        mouseDrag: true,
        controls: false,
        nav: false,
        swipeAngle: false,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        autoWidth: true,
    });
})

const vskteam = team.filter(member => member.show);

components: { TeamCard }

</script>

<style></style>