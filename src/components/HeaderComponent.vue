<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LangSelector from '@/components/global/LangSelector.vue';
import { defineComponent } from 'vue';

defineComponent( {
    name: 'HeaderComponent',
    components: {
        RouterLink,
        LangSelector
    }
});

function unshow(){
    document.getElementById("navbarSupportedContent")?.classList.remove("show");
}
</script>

<template>
    <header class="header navbar-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg">
                        <RouterLink class="navbar-brand" to="/">
                            <img src="/img/logo.svg" alt="Logo"  />
                        </RouterLink>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <em class="fa fa-bars"></em>
                        </button>

                        <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                            <ul id="nav" class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <RouterLink @click="unshow" class="nav-link scrollto" to="/">
                                        {{ $t('navbar.home') }}
                                    </RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink @click="unshow" class="nav-link scrollto" to="/about">
                                        {{ $t('navbar.about') }}
                                    </RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink @click="unshow" class="nav-link scrollto" to="/service">
                                        {{ $t('navbar.services') }}
                                    </RouterLink>
                                    <ul class="sub-menu">
                                        <li class="nav-item">
                                            <RouterLink @click="unshow" to="/service/web">
                                                {{ $t('services.web.title') }}
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <RouterLink @click="unshow" class="nav-link scrollto" to="/contact">
                                        {{ $t('navbar.contact') }}
                                    </RouterLink>
                                </li>
                                <LangSelector />
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