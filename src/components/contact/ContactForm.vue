<template>
  <form @submit.prevent="sendMail()">
    <div class="relative mb-4">
      <label for="name" class="leading-7 text-sm text-gray-600 dark:text-gray-400">{{
        $t('contact.form.name')
      }}</label>
      <input
        type="text"
        id="name"
        name="name"
        v-model="fullname"
        class="w-full bg-gray-300 rounded-xl focus:border-vsk-1 focus:ring-2 focus:ring-vsk-1 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div class="relative mb-4">
      <label for="email" class="leading-7 text-sm text-gray-600 dark:text-gray-400">{{
        $t('contact.form.email')
      }}</label>
      <input
        type="email"
        id="email"
        name="email"
        v-model="email"
        class="w-full bg-gray-300 rounded-xl focus:border-vsk-1 focus:ring-2 focus:ring-vsk-1 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div class="relative mb-4">
      <label for="phone" class="leading-7 text-sm text-gray-600 dark:text-gray-400">{{
        $t('contact.form.phone')
      }}</label>
      <input
        type="number"
        id="phone"
        name="phone"
        v-model="phone"
        class="w-full bg-gray-300 rounded-xl focus:border-vsk-1 focus:ring-2 focus:ring-vsk-1 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div class="relative mb-4">
      <label for="subject" class="leading-7 text-sm text-gray-600 dark:text-gray-400">{{
        $t('contact.form.subject')
      }}</label>
      <input
        type="subject"
        id="subject"
        name="subject"
        v-model="subject"
        class="w-full bg-gray-300 rounded-xl focus:border-vsk-1 focus:ring-2 focus:ring-vsk-1 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div class="relative mb-4">
      <label for="message" class="leading-7 text-sm text-gray-600 dark:text-gray-400">{{
        $t('contact.form.message')
      }}</label>
      <textarea
        id="message"
        name="message"
        v-model="message"
        class="w-full bg-gray-300 rounded-xl focus:border-vsk-1 focus:ring-2 focus:ring-vsk-1 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
    </div>
    <button
      type="submit"
      class="text-white bg-vsk-1 border-0 py-4 w-[100%] focus:outline-none hover:bg-vsk-2 rounded-xl text-lg"
    >
      {{ $t('contact.form.button') }}
    </button>
    <p v-if="alert_error" @:click="closeError" class="text-xs text-red-700 mt-3">
      {{ $t('contact.form.error') }}
    </p>
    <p v-if="alert_succes" @:click="closeSuccess" class="text-xs text-green-700 mt-3">
      {{ $t('contact.form.success') }}
    </p>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactForm',
  data() {
    return {
      alert_error: false,
      alert_succes: false,
      fullname: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    async sendMail() {
      const data = {
        access_key: '49ec7e84-cca9-4059-b1a7-cc6652d32a03',
        fullname: this.fullname,
        email: this.email,
        phone: this.phone,
        subject: this.subject,
        message: this.message
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
      });

      response
        .json()
        .then((data) => {
          console.log(data);
          if (data.success) {
            this.openSuccess();
          } else {
            this.openError();
          }
        })
        .catch((error) => {
          console.error(error);
          this.openError();
        });
    },
    closeError() {
      this.alert_error = false;
    },
    closeSuccess() {
      this.alert_succes = false;
    },
    openError() {
      this.alert_error = true;
    },
    openSuccess() {
      this.fullname = '';
      this.email = '';
      this.phone = '';
      this.subject = '';
      this.message = '';
      this.alert_succes = true;
    }
  }
});
</script>
