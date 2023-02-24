<template>
    <section id="pricing" class="pricing bg-body">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Planes</h2>
                <h3>Compare nuestros <span>Planes</span></h3>
                <p class="text-body">Cada uno de nuestros planes se puede modificar todo lo necesario para sastifacer sus necesidades </p>
            </div>

            <div class="row">

                <div v-for="price in prices" :key="price.id" class="col-lg-4 col-md-12 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                    <PricingComponent v-bind="price" />
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import prices from '../../data/prices.json';
import PricingComponent from './components/PricingComponent.vue';

export default {
    data() {
        return {
            prices
        };
    },
    components: { PricingComponent }
}
</script>

<style>
</style>