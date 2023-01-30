<template>
    <section id="featured-services" class="featured-services bg-body-tertiary bg-gradient">
        <div class="container" data-aos="fade-up">

            <div class="row">
                <div class="col-md-12 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" v-for="featured in featureds"
                    :key="featured.id">
                    <FeaturedComponent v-bind="featured" />
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import featureds from '../../data/featureds.json';
import FeaturedComponent from './components/FeaturedComponent.vue';

export default {
    data() {
        return {
            featureds: featureds
        };
    },
    components: { FeaturedComponent }
}
</script>

<style>
</style>