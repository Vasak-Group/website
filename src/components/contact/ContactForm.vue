<template>
  <form class="contact-form" @submit.prevent="sendMail()">
      <div class="row">
          <div class="col-md-6">
              <input type="text" name="name" id="name" v-model="fullname" :placeholder="$t('contact.form.name')" required>
          </div>
          <div class="col-md-6">
              <input type="email" name="email" id="email" v-model="email" :placeholder="$t('contact.form.email')" required>
          </div>
          <div class="col-md-6">
              <input type="text" name="phone" id="phone" v-model="phone" :placeholder="$t('contact.form.phone')">
          </div>
          <div class="col-md-6">
              <input type="text" name="subject" id="subject" v-model="subject" :placeholder="$t('contact.form.subject')" required>
          </div>
          <div class="col-12">
              <textarea name="message" id="message" v-model="message" :placeholder="$t('contact.form.message')" rows="5"
                required></textarea>
          </div>
          <div class="col-12">
              <div class="button text-center">
                  <button type="submit" class="theme-btn">{{ $t('contact.form.button') }}</button>
              </div>
          </div>
      </div>
      <div v-if="alert_error" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ $t('contact.form.error') }}
        <button type="button" class="btn-close" v-on:click="closeError" aria-label="Close"></button>
      </div>
      <div v-if="alert_succes" class="alert alert-success alert-dismissible fade show" role="alert">
        {{ $t('contact.form.success') }}
        <button type="button" class="btn-close" v-on:click="closeSuccess" aria-label="Close"></button>
      </div>
  </form>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            alert_error: false,
            alert_succes: false,
            fullname: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        }
    },
    methods: {
        async sendMail () {
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
                headers: { 'Content-Type': 'application/json', Accept: "application/json", }
            })
            
            response.json()
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
        closeError () {
            this.alert_error = false;
        },
        closeSuccess () {
            this.alert_succes = false;
        },
        openError () {
            this.alert_error = true;
        },
        openSuccess () {
            this.fullname = '';
            this.email = '';
            this.phone = '';
            this.subject = '';
            this.message = '';
            this.alert_succes = true;
        },
    }
};
</script>