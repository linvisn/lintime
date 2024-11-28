<script setup>
import { useFavicon } from '@vueuse/core'

const theme = useDefineTheme()
</script>

<template>
    <div class="panel p-2 p-lg-3 border-end d-flex flex-column justify-content-between" :class="theme">
        <div>
            <PanelLink :to="'/timer'" @click="useFavicon(`/linTime/Timer.svg`)">
                <i class="bi bi-hourglass-split"></i> <span class="d-none d-lg-inline">Timer</span>
            </PanelLink>
            <PanelLink :to="'/stopwatch'" @click="useFavicon(`/linTime/Stopwatch.svg`)">
                <i class="bi bi-stopwatch"></i> <span class="d-none d-lg-inline">Stopwatch</span>
            </PanelLink>
            <PanelLink :to="'/tabata'" @click="useFavicon(`/linTime/Tabata.svg`)">
                <i class="bi bi-repeat"></i> <span class="d-none d-lg-inline">Tabata</span>
            </PanelLink>
        </div>

        <div>
            <PanelButton data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas" aria-controls="menuOffcanvas">
                <i class="bi bi-menu-app"></i>
            </PanelButton>
        </div>
    </div>
</template>

<style scoped>
.panel {
    width: 20% !important;

    border-color: rgba(255, 255, 255, 0.25);

    background-color: rgb(30, 48, 48);
}

.mocha {
    background-color: rgb(var(--ctp-mocha-crust-rgb));
}

.midnight-fireplace {
    background-image: linear-gradient(90deg, rgb(60, 8, 95), rgb(14, 3, 116));
}
</style>