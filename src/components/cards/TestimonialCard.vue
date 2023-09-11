<template>
  <div class="item tns-item" aria-hidden="true">
      <div class="single-testimonial">
          <div class="testimonial-img">
              <img :src="image" :alt="name" loading="lazy"/>
          </div>
          <div class="testimonial-content mb-35">
              <p class="pb-30">{{ comment }}</p>
              <div class="testimonial-info">
                  <div class="testimonial-meta">
                      <h5>{{ name }}</h5>
                      <span>{{ position }}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TestimonialCard',
    props: {
        name: String,
        position: String,
        image: String,
        comment: String,
    },
});
</script>