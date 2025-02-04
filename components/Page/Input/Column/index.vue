<script setup>
defineProps({
    isRemovable: Boolean
})
defineEmits(['removeValue'])

const isStarted = defineModel('isStarted')
const isDisabled = defineModel('isDisabled')
const value = defineModel('value')
</script>

<template>
    <span class="input-item col-12 fs-3 mx-4" :class="{ 'disabled': isDisabled }">
        <div class="d-flex align-items-center row">
            <span class="col-3 opacity-75 fs-5 fw-bold">
                <slot />
            </span>
            <span class="col-7 row">
                <input class="input col px-4 py-1 border rounded-start-1" :class="{ 'input-active': isStarted && !isDisabled, 'rounded-end-1': isStarted || isDisabled }" type="number" v-model="value" min="1" :disabled="isStarted || isDisabled">
                <span class="value reset-value col-3 py-1 border text-center" :class="{ 'rounded-end-1': !isRemovable }" v-if="!isStarted && !isDisabled" @click="value = 0">
                    <i class="bi bi-arrow-clockwise"></i>
                </span>
                <span class="value remove-value col-3 py-1 border text-center rounded-end-1" v-if="!isStarted && isRemovable && !isDisabled" @click="$emit('removeValue')">
                    <i class="bi bi-x-lg"></i>
                </span>
            </span>
        </div>
    </span>
</template>

<style scoped>
.disabled {
    opacity: 0.5;
}

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

.value {
    height: 100% !important;
    
    opacity: 0.75;
    cursor: pointer;
}
.value:hover {
    opacity: 1;
}

.reset-value {
    border-color: rgb(53, 197, 149) !important;

    background-color: rgb(41, 122, 95);
}

.remove-value {
    border-color: rgb(204, 138, 52) !important;

    background-color: rgb(122, 77, 41);
}
</style>