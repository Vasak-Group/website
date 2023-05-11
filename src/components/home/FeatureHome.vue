<template>
    <section id="feature" class="feature-section pt-130">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-9 mx-auto">
                    <div class="section-title text-center mb-55">
                        <span class="wow fadeInDown" data-wow-delay=".2s"
                            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">
                            Caracteristicas
                        </span>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s"
                            style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                            ¿En que nos diferenciamos?
                        </h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s"
                            style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                            At vero eos et
                            accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium
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