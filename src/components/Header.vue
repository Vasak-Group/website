<template>
    <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">

            <h1 class="logo"><a href="/">BizLand<span>.</span></a></h1>
            <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></a>-->

            <nav id="navbar" class="navbar">
                <ul>
                    <li>
                        <RouterLink to="/#hero">Home</RouterLink>
                    </li>
                    <li><a class="nav-link scrollto" href="#about">About</a></li>
                    <li><a class="nav-link scrollto" href="#services">Services</a></li>
                    <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                    <li><a class="nav-link scrollto" href="#team">Team</a></li>
                    <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                    
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