<template>
    <div class="header sticky-top w-100 fs-1 px-4 px-sm-5 pt-2 mb-4 fw-bold">
        <slot />
    </div>
</template>

<style scoped>
.header {
    text-shadow: 0 0 0.25em black;

    background-color: linear-gradient(rgb(59, 59, 59), transparent) !important;
}

.mocha .header {
    background: linear-gradient(rgb(var(--ctp-mocha-base-rgb)), transparent) !important;
}

.midnight-fireplace .header {
    background: linear-gradient(rgb(97, 55, 0), transparent) !important;
}
</style>