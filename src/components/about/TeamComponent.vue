<template>
    <section id="team" class="team-section img-bg pt-130 text-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-7 mx-auto">
                    <div class="section-title mb-60">
                        <span>{{ $t('about.team.title') }}</span>
                        <h2>{{ $t('about.team.question') }}</h2>
                        <p>{{ $t('about.team.answer') }}</p>
                    </div>
                </div>
            </div>
            <div id="teams-slider">

                <TeamCard v-for="member in vskteam" v-bind:key="member.id" v-bind="member" />

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import team from '@/data/team.json'
import TeamCard from '@/components/cards/TeamCard.vue'

import { tns } from "tiny-slider/src/tiny-slider"
import { defineComponent, onMounted } from "vue"
import { TeamMember } from '@/types/TeamMember';

onMounted(() => {
    tns({
        container: '#teams-slider',
        items: 4,
        autoWidth: true,
        slideBy: 1,
        center: true,
        speed: 400,
        gutter: 2,
        loop: true,
        mouseDrag: true,
        controls: false,
        nav: true,
        navPosition: 'bottom',
        autoplay: true,
        autoplayButtonOutput: false,
    });
})

const vskteam:TeamMember[] = team.filter(member => member.show);

defineComponent({
    name: 'TeamComponent',
    components: {
        TeamCard
    },
    data() {
        return {
            vskteam
        }
    }
});
</script>

<style lang="scss">
.tns-nav {
    button{
        border-radius: 50px;
        margin: 2px;
        height: 7px;
        width: 7px;
        background: var(--bg-site-2);
        border: none;

        &.tns-nav-active{
            background: var(--site-gradient);
        }
    }
} 
</style>