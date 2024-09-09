<script setup>
const theme = useDefineTheme()
</script>

<template>
    <div class="button d-flex justify-content-center gap-1 mb-1 p-1 fs-4 fw-medium rounded-3" :class="theme">
        <slot />
    </div>
</template>

<style scoped>
.button {
    background-image: none !important;
    background-color: rgb(50, 73, 73);
}
.button:hover {
    background-color: rgb(77, 95, 95);
}
.mocha .button {
    background-color: rgb(var(--ctp-mocha-surface0-rgb)) !important;
}
.mocha .button:hover {
    background-color: rgb(var(--ctp-mocha-surface1-rgb)) !important;
}
.midnight-fireplace .button {
    background-color: rgb(98, 105, 0, 0.5);
}
.midnight-fireplace .button:hover {
    background-color: rgb(98, 105, 0, 0.75);
}
</style>