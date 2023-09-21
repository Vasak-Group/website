<template>
    <BreadcrumbsComponent :title="$t('contact.title')" />
    <section class="contact-section pt-130">
        <div class="container">
            <div class="row">
                <div class="col-xl-4">
                    <div class="contact-item-wrapper">
                        <div class="row">
                            <div class="col-12 col-md-6 col-xl-12">
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fa fa-whatsapp"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h4>WhatsApp</h4>
                                        <p>+54 9 11 6010-9950</p>
                                        <p><a href="https://t.me/PatoJAD" rel="noopener" target="_blank">https://t.me/PatoJAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-12">
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fa fa-map"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h4>{{ $t('contact.address') }}</h4>
                                        <p>Oporto, Portugal</p>
                                        <p>Europa</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-12">
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h4>{{ $t('contact.mail') }}</h4>
                                        <p>info@vasak.net.ar</p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="contact-form-wrapper">
                        <div class="row">
                            <div class="col-xl-10 col-lg-8 mx-auto">
                                <div class="section-title text-center mb-50">
                                    <span>{{ $t('contact.title') }}</span>
                                    <h2>{{ $t('contact.question') }}</h2>
                                    <p>{{ $t('contact.answer') }}</p>
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <MapComponent />
</template>

<script setup lang="ts">
import ContactForm from '@/components/contact/ContactForm.vue';
import MapComponent from '@/components/contact/MapComponent.vue';
import BreadcrumbsComponent from '@/components/global/BreadcrumbsComponent.vue';
import { defineComponent, onMounted } from 'vue';
import i18n from '@/i18n';

const { t } = i18n().global;

onMounted(() => {
    document.title = t('contact.title') + ' | Vasak Group';
    window.scrollTo(0, 0);
})

defineComponent({
  name: 'ContactView',
  components: {
    BreadcrumbsComponent,
    MapComponent,
    ContactForm
  },
});
</script>
