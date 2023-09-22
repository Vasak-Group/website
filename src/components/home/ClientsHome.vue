<template>
    <section id="clients" class="clients bg-body-tertiary">
        <div class="container" data-aos="zoom-in">

            <div class="row" id="clients-slider">

                <div class="align-items-center justify-content-center" v-for="client in clients" :key="client.id">
                    <ClientComponent v-bind="client"  />
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import clients from '../../data/clients.json';
import ClientComponent from './components/ClientComponent.vue';

export default {
    data() {
        return {
            clients: clients.filter(client => client.show)
        };
    },
    components: { ClientComponent }
}
</script>

<style>
</style>