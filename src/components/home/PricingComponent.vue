<template>
    <section id="pricing" class="pricing-section pt-140 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-10 mx-auto">
                    <div class="section-title text-center mb-60">
                        <span>{{ $t('home.plans.title') }}</span>
                        <h2>{{ $t('home.plans.question') }}</h2>
                        <p>{{ $t('home.plans.answer') }}</p>
                    </div>
                </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="row">

                        <PricingCard v-for="price in prices" :key="price.id" v-bind="price" />

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import prices from '../../data/prices.json';
import PricingCard from '../cards/PricingCard.vue';

export default {
    data() {
        return {
            prices
        };
    },
    components: { PricingCard }
}
</script>

<style></style>