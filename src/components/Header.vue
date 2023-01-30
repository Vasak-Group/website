<template>
    <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary bg-gradient">
        <div class="container-fluid">
            <a class="navbar-brand logo" href="/">
                <img src="/img/logo.svg" alt="Vasak Group" title="Vasak Group" height="70" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" to="/#hero">Inicio</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" to="/#about">Sobre Nosotros</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" to="/#services">Servicios</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" to="/#portfolio">Portfolio</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" to="/#team">Equipo</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link scrollto" to="/#contact">Contacto</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scrollto" target="_blank" href="https://community.vasak.net.ar">Comunidad</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

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