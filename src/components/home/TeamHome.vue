<template>
    <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Equipo</h2>
                <h3>Conocé a nuestro <span>equipo</span></h3>
                <p>Conocé a las personas que hacen posible todo esto. Y se preocupan por hacer crecer tus proyectos.</p>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" v-for="member in team" v-bind:key="member.id"
                    data-aos="fade-up" :data-aos-delay="member.delay">
                    <MemberComponent v-bind="member" />
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import team from '../../data/team.json'
import MemberComponent from './components/MemberComponent.vue'
export default {
    data() {
        return {
            team
        };
    },
    components: { MemberComponent }
}
</script>

<style>
</style>