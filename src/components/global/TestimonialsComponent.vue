<template>
  <section class="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    />
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-indigo-600/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <div class="flex flex-col items-center justify-center mt-20">
        <p class="text-vsk-2 font-bold">{{ $t('testimonials.title') }}</p>
        <h2 class="text-vsk-1 text-5xl font-bold text-center">
          {{ $t('testimonials.question') }}
        </h2>
      </div>

      <div class="relative slide">
        <div
          class="carousel-indicators absolute bottom-0 flex h-24 w-full justify-center items-center"
        >
          <ol class="z-50 flex w-4/12 justify-center pt-36">
            <li
              v-for="testimonial in idsTestimonials"
              :key="testimonial.id"
              class="md:w-4 md:h-4 bg-gray-300 dark:bg-gray-500 rounded-full cursor-pointer mx-2"
            ></li>
          </ol>
        </div>
        <div class="carousel-inner relative overflow-hidden w-full">
          <div
            v-for="testimonial in testimonials"
            :id="`slide-${testimonial.id}`"
            :key="testimonial.id"
            :class="`${active === testimonial.id ? 'active' : 'left-full'}`"
            class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
          >
            <TestimonialCard
              :name="testimonial.name"
              :position="testimonial.position"
              :image="testimonial.image"
              :comment="testimonial.comment"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import testimonials from '@/data/testimonials';
import TestimonialCard from '@/components/cards/TestimonialCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TestimonialsComponent',
  data() {
    return {
      testimonials,
      active: 0
    };
  },
  computed: {
    idsTestimonials() {
      return this.testimonials.map((testimonial) => testimonial.id);
    }
  },
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.testimonials.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 5000);
  },
  components: {
    TestimonialCard
  }
});
</script>
../../data/testimonials