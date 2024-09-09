<script setup>
defineProps({
    id: String,
    disabled: Boolean
})
</script>

<template>
    <div class="offcanvas-button mt-2 px-3 py-2 fs-4 fw-normal border border-2 rounded-3" :class="{ disabled: disabled }">
        <slot />
    </div>
</template>

<style scoped>
.offcanvas-button {
    border-color: rgba(255, 255, 255, 0.25) !important;

    background-color: rgb(73, 0, 133);

    cursor: pointer;
}
.offcanvas-button:is(.disabled) {
    background-color: rgb(36, 36, 36);

    opacity: 0.5;
}
.offcanvas-button:not(.disabled):hover {
    background-color: rgb(100, 0, 182);
}
</style>