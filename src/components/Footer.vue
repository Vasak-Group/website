<template>
    <footer class="footer pt-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-md-6">
                    <div class="footer-widget mb-60">
                        <a href="/" class="logo mb-30 text-center"><img src="/img/logo.svg" alt="logo" loading="lazy"></a>
                        <p class="mb-30 footer-desc">
                            Vasak Group es una empresa que busca contribuir con el crecimiento tecnologico y economico de
                            otras empresas PYMES y emprendimientos.
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="footer-widget mb-60">
                        <h4>Free Service</h4>
                        <ul class="footer-links">
                            <li>
                                <a href="https://qrgenerator.vasak.net.ar/" target="_blank">QR Generator</a>
                            </li>
                            <li>
                                <a href="https://wppgenerator.vasak.net.ar/" target="_blank">WhatsApp Link Generator</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="footer-widget mb-60">
                        <h4>Contact</h4>
                        <ul class="footer-contact">
                            <li>
                                <p>info@vasak.net.ar</p>
                            </li>
                            <li>
                                <p>Oporto, Portugal</p>
                            </li>
                            <li>
                                <p>Buenos Aires, Argentina</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="footer-social-links">
                            <ul class="d-flex">
                                <li>
                                    <a href="https://web.facebook.com/vasakgroup" target="_blank">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@vasak.net.ar" target="_blank">
                                        <i class="fa fa-envelope"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/vasakgroup/" target="_blank">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/vasakgroup/" target="_blank">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p>
                            Todos los dertechos reservados <a href="/" class="vsk-font" rel="nofollow">Vasak group</a>
                        </p>
                        <LangSelector />
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <a href="#" class="scroll-top">
        <i class="fa fa-arrow-up"></i>
    </a>
    <ToggleTheme />
</template>

<script setup lang="ts">
import { defineComponent  } from 'vue';
import social from '../data/social.json';
import ToggleTheme from './global/ToggleTheme.vue';
import LangSelector from './global/LangSelector.vue';

defineComponent ({
    name: 'Footer',
    setup() {
        return {
            social,
        };
    },
    components: {
        ToggleTheme,
        LangSelector
    },
})
</script>

<style scoped>
.logo img {
    height: 110px;
}

.btn-contact {
    background-color: var(--accent-color);
    border-color: var(--accent-color-dark);
    border-radius: var(--border-radius);
    color: #FFF;
    font-size: 30px;
    padding: 5px 70px;
}
</style>