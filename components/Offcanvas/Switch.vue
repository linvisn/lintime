<script setup>
const model = defineModel()
</script>

<template>
    <div class="switch form-check form-switch d-flex align-items-center gap-4 py-1">
        <input class="switch-input form-check-input border border-2 rounded-5" type="checkbox" role="switch" id="switch" v-model="model">
        <label class="form-check-label fs-4 fw-medium" for="switch">
          <slot />
        </label>
    </div>
</template>

<style scoped>
.switch-input {
    width: 4.5rem;
    height: 2.25rem;

    border-color: rgb(255, 255, 255) !important;
}
.switch-input:checked {
    background-color: rgb(16, 238, 127) !important;
}
</style>