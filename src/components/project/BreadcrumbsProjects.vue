<template>
    <section class="breadcrumbs bg-body">
        <div class="container">

            <div class="d-flex justify-content-between align-items-center">
                <h1 class="text-body-emphasis text-center">{{ title }}</h1>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
h1 {
    padding: 50px 0 50px 0;
}
</style>