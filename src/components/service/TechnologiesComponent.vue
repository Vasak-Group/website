<script lang="ts">
import techs from '@/data/techs';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TechnologiesComponent',
  data() {
    return {
      techs,
      active: 0
    };
  },
  computed: {
    subsArrayTechs() {
      const newArray = [];
      for (let i = 0; i < this.techs.length; i += 4) {
        const chunk = this.techs.slice(i, i + 4);
        newArray.push(chunk);
      }
      return newArray;
    }
  },
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.subsArrayTechs.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 4000);
  }
});
</script>

<template>
  <div id="app">
    <div class="relative slide p-32">
      <div class="carousel-inner relative overflow-hidden w-full">
        <div
          v-for="(techs, i) in subsArrayTechs"
          :id="`slide-${i}`"
          :key="i"
          :class="`${active === i ? 'active' : 'left-full'}`"
          class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
        >
          <div
            class="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-0 lg:flex-nowrap lg:justify-around"
          >
            <span v-for="tech in techs">
              <img class="h-20 grayscale hover:grayscale-0 transform transition-all duration-500" :src="tech.img" :alt="tech.name" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
