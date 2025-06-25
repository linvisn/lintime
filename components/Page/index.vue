<script setup>
const theme = useDefineTheme()
</script>

<template>
    <div class="page" :class="theme">
        <slot />
    </div>
</template>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80% !important;
    
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