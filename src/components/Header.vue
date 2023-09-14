<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'Header',
    methods: {
        scrollTo(id) {
            const element = document.getElementById(id);
            console.log(element)
            window.scrollTo(0, element.offsetTop);
        }
    },
    components: {
        RouterLink
    }
}
</script>

<template>
    <header class="header navbar-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg">
                        <a class="navbar-brand" href="/">
                            <img src="/img/logo.svg" alt="Logo"  />
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <em class="fa fa-bars"></em>
                        </button>

                        <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                            <ul id="nav" class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <RouterLink class="nav-link scrollto" to="/">
                                        {{ $t('navbar.home') }}
                                    </RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link scrollto" to="/about">
                                        {{ $t('navbar.about') }}
                                    </RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link scrollto" to="/service">
                                        {{ $t('navbar.services') }}
                                    </RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link scrollto" to="/contact">
                                        {{ $t('navbar.contact') }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
svg {
    height: 20px;
}

button.dropdown-toggle {
    width: 50px;
}

.dropdown-menu {
    width: 100px;
}
</style>