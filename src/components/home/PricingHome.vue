<template>
    <section id="pricing" class="pricing-section pt-140 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-10 mx-auto">
                    <div class="section-title text-center mb-60">
                        <span class="wow fadeInDown" data-wow-delay=".2s"
                            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">
                            Planes
                        </span>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s"
                            style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                            Compare nuestros Planes
                        </h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s"
                            style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                            Cada uno de nuestros planes se puede modificar todo lo necesario para sastifacer sus
                            necesidades
                        </p>
                    </div>
                </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="row">

                        <PricingComponent v-for="price in prices" :key="price.id" v-bind="price" />

                    </div>
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

<style></style>