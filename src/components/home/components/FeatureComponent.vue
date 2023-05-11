<template>
    <div class="col-lg-4 col-md-6">
        <div class="feature-box box-style">
            <div class="feature-icon box-icon-style">
                <i :class="icon"></i>
            </div>
            <div class="box-content-style feature-content">
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        delay: {
            type: Number,
            default: 100
        }
    }
}
</script>

<style></style>