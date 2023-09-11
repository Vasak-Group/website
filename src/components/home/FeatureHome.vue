<template>
    <section id="feature" class="feature-section pt-130">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-9 mx-auto">
                    <div class="section-title text-center mb-55">
                        <span>
                            Caracteristicas
                        </span>
                        <h2>
                            ¿En que nos diferenciamos?
                        </h2>
                        <p>
                            Pensamos en vos, por eso te ofrecemos las mejores soluciones para que tu proyecto sea un éxito.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <FeatureComponent v-for="featured in featureds" :key="featured.id" v-bind="featured" />
            </div>
        </div>
    </section>
</template>

<script>
import featureds from '../../data/features.json';
import FeatureComponent from './components/FeatureComponent.vue';

export default {
    data() {
        return {
            featureds: featureds
        };
    },
    components: { FeatureComponent }
}
</script>

<style></style>