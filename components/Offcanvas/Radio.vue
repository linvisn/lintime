<script setup>
defineProps({
    id: String,
    value: String
})

const model = defineModel()
</script>

<template>
    <div class="radio form-check d-flex align-items-center gap-3 fs-4 fw-normal">
        <input class="radio-input form-check-input border border-2" type="radio" :id="id" v-model="model" :value="value">
        <label class="form-check-label" :for="id">
          <slot />
        </label>
    </div>
</template>

<style scoped>
.radio-input {
    border-color: rgb(255, 255, 255) !important;
}
.radio-input:checked {
    background-color: rgb(238, 105, 16) !important;
}
</style>