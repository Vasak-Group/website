<template>
    <section id="team" class="team-section img-bg pt-130">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-7 mx-auto">
                    <div class="section-title text-center mb-60">
                        <span class="wow fadeInDown" data-wow-delay=".2s"
                            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">
                            Equipo
                        </span>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s"
                            style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                            Conocé a nuestro equipo
                        </h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s"
                            style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                            Conocé a las personas que hacen posible todo esto. Y se preocupan por hacer crecer tus
                            proyectos.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row teams-slider">

                <MemberComponent v-for="member in vskteam" v-bind:key="member.id" v-bind="member" />

            </div>
        </div>
    </section>
</template>

<script setup>
import team from '../../data/team.json'
import MemberComponent from './components/MemberComponent.vue'
import { tns } from "tiny-slider/src/tiny-slider"
import { onMounted } from "vue"

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

components: { MemberComponent }

</script>

<style></style>