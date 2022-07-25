<template>
    <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">

            <a href="/" class="logo">
                <img src="/img/logo.svg" alt="Lynx Software Design" title="Lynx Software Design">
            </a>

            <nav id="navbar" class="navbar">
                <ul>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#hero">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#services">Services</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#portfolio">Portfolio</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#team">Team</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link scrollto" to="/#contact">Contact</RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/about">About2</RouterLink>
                    </li>
                </ul>
                <i class="fa fa-list mobile-nav-toggle"></i>
            </nav><!-- .navbar -->

        </div>
    </header><!-- End Header -->
</template>

<script>
import { RouterLink } from 'vue-router';

export default {

}
</script>

<style>
</style>