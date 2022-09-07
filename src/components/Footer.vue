<template>
    <footer id="footer">

        <div class="footer-newsletter">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h4>Contacta con nosotros</h4>
                        <p>Contactanos para poder resolver todas tus dudas y comenzar hoy con tu proyecto</p>
                        <a class="btn btn-contact"
                            href="https://wa.me/541123882753?text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20los%20productos%20y%20ofertas%20de%20Lynx">
                            <em class="fa fa-whatsapp"></em>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-md-6 footer-contact">
                        <h3 class="v-font"><span>Vasak</span> group</h3>
                        <p>
                            GBA Sur (Quilmes - Berazategui) <br>
                            Buenos Aires<br>
                            Argentina <br><br>
                            <strong>Telefono:</strong> +54 9 11 2388-2753<br>
                            <strong>Email:</strong> info@vasak.net.ar<br>
                        </p>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-links text-center">
                        <h4>Nuestros Servicios Gratuitos</h4>
                        <ul>
                            <li>
                                <em class="fa fa-chevron-right"></em> <a target="_black"
                                    href="https://qrgenerator.vasak.net.ar/">QR Generator</a>
                            </li>
                            <li>
                                <em class="fa fa-chevron-right"></em> <a target="_black"
                                    href="https://play.google.com/store/apps/details?id=com.lynxqrcam">Lynx
                                    QRCam</a>
                            </li>
                            <li>
                                <em class="fa fa-chevron-right"></em> <a target="_black"
                                    href="https://wppgenerator.vasak.net.ar/">WhatsApp Generator</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-12 footer-links text-center">
                        <h4>Nuestras Redes</h4>
                        <p>No te pierdas todas nuestras novedades</p>
                        <div class="social-links mt-3">
                            <a v-for="red in social" target="_black" :title="red.name" :key="red.id" :href="red.url">
                                <em :class="red.icon"></em>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="container py-4">
            <div class="copyright">
                &copy; <span class="v-font">Vasak group</span>. Todos los dertechos reservados.
            </div>
            <div class="credits">
                <span class="v-font">Vasak</span>
            </div>
        </div>
    </footer>
</template>

<script>
import social from '../data/social.json';
export default {
    data() {
        return {
            social: social
        }
    }
}
</script>

<style scoped>
.btn-contact {
    background-color: var(--accent-color);
    border-color: var(--accent-color-dark);
    border-radius: var(--border-radius);
    color: #FFF;
    font-size: 30px;
    padding: 5px 70px;
}
</style>