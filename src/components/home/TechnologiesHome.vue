<script>
import techs from '../../data/techs.json';

export default {
    name: 'TechnologiesHome',
    data() {
        return {
            techs: techs
        };
    },
};
</script>

<template>
    <section id="technology" class="team bg-body-tertiary">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Tecnologias</h2>
                <h3>Conocé a nuestro <span>stack</span> tecnológico</h3>
                <p class="text-body">Conocé nuestro amplio stack tecnológico que crece continuamente para brindar un mejor servicio a
                    nuestros clientes.</p>
            </div>

            <div class="row">

                <div class="col-md-3 text-center" v-for="tech in techs" :key="tech.name">
                    <img :src="tech.img" :alt="tech.name" class="img-fluid tech-img" loading="lazy" />
                </div>

            </div>

        </div>
    </section>
</template>

<style>
.tech-img {
    height: 90px;
    margin: 20px;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    transition:0.3s scale;
}

.tech-img:hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    scale: 1.3;
    transition:0.5s scale;
}
</style>