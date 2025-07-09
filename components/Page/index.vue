<script setup>
const theme = useTheme()
const isPortrait = useOrientation()
</script>

<template>
    <div class="page d-flex flex-column align-items-center flex-grow-1" :class="theme"
    :style="{ width: isPortrait ? '100%' : '80%', height: isPortrait ? 'auto' : '100%' }">
        <slot />
    </div>
</template>

<style scoped>
.page {
    background-color: rgb(59, 59, 59);

    overflow: auto;
}

.page:is(.mocha) {
    background-color: rgb(var(--ctp-mocha-mantle-rgb)) !important;
}

.page:is(.midnight-fireplace) {
    background: linear-gradient(64deg, rgb(14, 3, 116), rgb(105, 56, 0)) !important;
}
</style>