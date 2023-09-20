<template>
  <form action="https://api.web3forms.com/submit" method="POST" class="contact-form">
      <div class="row">
          <div class="col-md-6">
              <input type="text" name="name" id="name" :placeholder="$t('contact.form.name')" required>
          </div>
          <div class="col-md-6">
              <input type="email" name="email" id="email" :placeholder="$t('contact.form.email')" required>
          </div>
      </div>
      <div class="row">
          <div class="col-md-6">
              <input type="text" name="phone" id="phone" :placeholder="$t('contact.form.phone')" required>
          </div>
          <div class="col-md-6">
              <input type="text" name="subject" id="email" :placeholder="$t('contact.form.subject')" required>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
              <textarea name="message" id="message" :placeholder="$t('contact.form.message')" rows="5"
                ></textarea>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
              <div class="button text-center">
                  <button type="submit" class="theme-btn">{{ $t('contact.form.button') }}</button>
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