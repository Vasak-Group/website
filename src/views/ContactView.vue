<template>
    <BreadcrumbsProjects title="Contacto" />
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
                                        <p><a href="https://t.me/PatoJAD" target="_blank">https://t.me/PatoJAD</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-12">
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fa fa-map"></i>
                                    </div>
                                    <div class="contact-content">
                                        <h4>Direccion</h4>
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
                                        <h4>Correo</h4>
                                        <p>info@vasak.net.ar</p>
                                        <p>vasakgroup@gmail.com</p>
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
                                    <span class="wow fadeInDown" data-wow-delay=".2s"
                                        style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">
                                        Contacto
                                    </span>
                                    <h2 class="wow fadeInUp" data-wow-delay=".4s"
                                        style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                                        Comunicate
                                    </h2>
                                    <p class="wow fadeInUp" data-wow-delay=".6s"
                                        style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                                        Comunicate con nosotros. Comenza hoy a potenciar tus ideas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <form action="assets/php/mail.php" class="contact-form">
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="map-section">
        <div class="map-container">
            <object style="border:0; height: 690px; width: 100%;"
                data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16835.08026906632!2d-8.635669250422245!3d41.16186463554482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114bc!2sOporto%2C%20Portugal!5e0!3m2!1ses-419!2sar!4v1683810190448!5m2!1ses-419!2sar">
            </object>
        </div>
    </section>
</template>

<script setup lang="ts">
import BreadcrumbsProjects from '../components/project/BreadcrumbsProjects.vue';
import { defineComponent, onMounted } from 'vue';

onMounted(() => {
    document.title = 'Contacto | Vasak Group';
    window.scrollTo(0, 0);
})

defineComponent({
  name: 'ContactView',
  components: {
    BreadcrumbsProjects,
  },
});
</script>
