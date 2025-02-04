<script setup>
defineProps({
    inputClass: String
})

const isStarted = defineModel('isStarted')
const isDisabled = defineModel('isDisabled')
const value = defineModel('value')
</script>

<template>
    <span class="input-item fs-3 col-4">
        <div class="d-flex align-items-end justify-content-center row-gap-1 column-gap-5 px-1 px-lg-3 fs-6 row">
            <span class="opacity-50 col-12 col-lg-5">
                <slot />
            </span>
            <span class="reset-value col-12 col-lg-4 py-1 text-center rounded-top-1" v-if="!isStarted" @click="value = 0">
                <i class="bi bi-arrow-clockwise"></i>
            </span>
        </div>
        <input class="input w-100 px-4 py-1 border" :class="[ { 'input-active': isStarted || isDisabled }, inputClass ]" type="number" v-model="value" min="1" :disabled="isStarted || isDisabled">
    </span>
</template>

<style scoped>
.input {
    border-color: rgba(255, 255, 255, 0.5) !important;

    background-color: darkslategray;
}
.midnight-fireplace .input {
    background-color: rgb(64, 47, 79);
}
.mocha .input {
    border-color: rgb(var(--ctp-mocha-lavender-rgb)) !important;

    background-color: rgb(var(--ctp-mocha-overlay0-rgb));
}

.input-active {
    background-color: rgb(128, 123, 65);

    opacity: 0.75;
}
.midnight-fireplace .input-active {
    background-color: rgb(77, 79, 47);
}
.mocha .input-active {
    border-color: rgb(var(--ctp-mocha-yellow-rgb)) !important;
}

.reset-value {
    background-color: rgb(41, 122, 95);
    
    opacity: 0.75;
    cursor: pointer;
}
.reset-value:hover {
    opacity: 1;
}
</style>