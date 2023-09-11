<template>
    <section id="testimonials" class="testimonial-section pt-150 pb-150 img-bg">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-xl-6 col-lg-10 mx-auto">
                    <div class="section-title mb-60">
                        <span v-scroll-reveal.reset>Testimonios</span>
                        <h2 v-scroll-reveal.reset>Que es lo que nuestros <br> clientes comentan</h2>
                    </div>
                </div>
                
                <div class="col-xl-6 col-lg-10 mx-auto">
                        <div class="testimonial-wrapper">
                            <div class="tns-outer" id="tns2-ow">
                                <div class="tns-controls" aria-label="Carousel Navigation" tabindex="0">
                                    <button type="button" data-controls="prev" tabindex="-1" aria-controls="tns2">
                                        <i class="fa fa-arrow-left"></i>
                                    </button>
                                    <button type="button" data-controls="next" tabindex="-1" aria-controls="tns2">
                                        <i class="fa fa-arrow-right"></i>
                                    </button>
                                </div>
                                <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">
                                    slide <span class="current">3</span>  of 2
                                </div>
                                <div id="tns2-mw" class="tns-ovh">
                                    <div class="tns-inner" id="tns2-iw">
                                        <div class="testimonial-active tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns2" style="transform: translate3d(-33.3333%, 0px, 0px);">
                                            
                                            <TestimonialCard 
                                                v-for="testimonial in testimonials" 
                                                :name="testimonial.name"
                                                :position="testimonial.position"
                                                :image="testimonial.image"
                                                :comment="testimonial.comment"  />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import testimonials from '../../data/testimonials.json';
import { tns } from 'tiny-slider'; 
import { onMounted } from 'vue';

import TestimonialCard from '../cards/TestimonialCard.vue';

onMounted(() => {
    tns({
        container: '.testimonial-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        gutter: 0,
        nav: false,
        controlsText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    });
});

</script>

<style>
</style>