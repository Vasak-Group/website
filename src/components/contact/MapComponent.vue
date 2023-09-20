
<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'MapComponent',
});
</script>

<template>
  <section class="map-section">
        <div class="map-container">
            <object style="border:0; height: 720px; width: 100%;"
                data="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65053200.93566814!2d-34.46208!3d-5.6358271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5372450263b35%3A0x8e3b8dbdcb812974!2sVasak%20Group!5e0!3m2!1ses-419!2sar!4v1695240541322!5m2!1ses-419!2sar">
            </object>
        </div>
    </section>
</template>