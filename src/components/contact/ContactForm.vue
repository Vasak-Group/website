<template>
  <form action="https://api.web3forms.com/submit" method="POST" class="contact-form">
      <div class="row">
          <div class="col-md-6">
              <input type="text" name="name" id="name" placeholder="Nombre" disabled required>
          </div>
          <div class="col-md-6">
              <input type="email" name="email" id="email" placeholder="Email" disabled required>
          </div>
      </div>
      <div class="row">
          <div class="col-md-6">
              <input type="text" name="phone" id="phone" placeholder="Telefono" disabled required>
          </div>
          <div class="col-md-6">
              <input type="text" name="subject" id="email" placeholder="Motivo" disabled required>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
              <textarea name="message" id="message" placeholder="Escribe tu Mensaje..." rows="5"
                  disabled></textarea>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
              <div class="button text-center">
                  <button type="submit" class="theme-btn disabled" disabled>Send Message</button>
              </div>
          </div>
      </div>
  </form>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'ContactForm',
});
</script>