<template>
    <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">

            <a href="/" class="logo">
                <img src="/img/logo.svg" alt="Vasak Group" title="Vasak Group" />
            </a>

            <nav id="navbar" class="navbar">
                <ul>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#hero">Inicio</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#about">Sobre Nosotros</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#services">Servicios</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#portfolio">Portfolio</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#team">Equipo</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#contact">Contacto</RouterLink>
                    </li>
                </ul>
                <em class="fa fa-list mobile-nav-toggle"></em>
            </nav><!-- .navbar -->

        </div>
    </header><!-- End Header -->
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    }
}
</script>

<style>
</style>