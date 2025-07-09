<script setup>
import { useFavicon } from '@vueuse/core'

const favicon = useFavicon()
const theme = useTheme()
const isPortrait = useOrientation()

const setFavicon = (icon) => {
    favicon.value = icon
}
</script>

<template>
    <div class="panel d-flex" 
    :class="[ { 'flex-row border-top': isPortrait, 'flex-column justify-content-between p-2 p-lg-3 border-end': !isPortrait }, theme ]" 
    :style="{ width: isPortrait ? '100%' : '20%', height: isPortrait ? 'auto' : '100%' }">
        <template v-if="isPortrait">
            <PanelLink :to="'/timer'" @click="setFavicon('/timer.svg')">
                <i class="bi bi-hourglass-split"></i> <span class="d-none d-lg-inline">Timer</span>
            </PanelLink>
            <PanelLink :to="'/stopwatch'" @click="setFavicon('/stopwatch.svg')">
                <i class="bi bi-stopwatch"></i> <span class="d-none d-lg-inline">Stopwatch</span>
            </PanelLink>
            <PanelLink :to="'/interval'" @click="setFavicon('/interval.svg')">
                <i class="bi bi-repeat"></i> <span class="d-none d-lg-inline">Interval</span>
            </PanelLink>
        </template>
        <template v-else>
            <div>
                <PanelLink :to="'/timer'" @click="setFavicon('/timer.svg')">
                <i class="bi bi-hourglass-split"></i> <span class="d-none d-lg-inline">Timer</span>
                </PanelLink>
                <PanelLink :to="'/stopwatch'" @click="setFavicon('/stopwatch.svg')">
                <i class="bi bi-stopwatch"></i> <span class="d-none d-lg-inline">Stopwatch</span>
                </PanelLink>
                <PanelLink :to="'/interval'" @click="setFavicon('/interval.svg')">
                <i class="bi bi-repeat"></i> <span class="d-none d-lg-inline">Interval</span>
                </PanelLink>
            </div>
        </template>

        <PanelButton data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas" aria-controls="menuOffcanvas">
            <i class="bi bi-menu-app"></i> <span class="d-none d-lg-inline">Menu</span>
        </PanelButton>
    </div>
</template>

<style scoped>
.panel {
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