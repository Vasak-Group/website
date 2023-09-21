<template>
    <section id="service" class="service-section pt-130 pb-80">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-9 mx-auto">
                    <div class="section-title text-center mb-55">
                        <span>{{ $t('services.title') }}</span>
                        <h2>{{ $t('services.question') }}</h2>
                        <p>{{ $t('services.answer') }}</p>
                    </div>
                </div>
            </div>
            <div class="row">

                <div v-for="service in services" :key="service.id" class="col-lg-4 col-md-6">
                    <div class="service-box box-style">
                        <div class="service-icon box-icon-style">
                            <i :class="service.icon"></i>
                        </div>
                        <div class="box-content-style service-content">
                            <h4>{{ $t(service.title) }}</h4>
                            <p>{{ $t(service.description) }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import services from '@/data/services.json'
import { defineComponent } from 'vue';

defineComponent( {
    name: 'ServicesComponent',
})
</script>