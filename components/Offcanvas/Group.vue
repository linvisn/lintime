<script setup>
import { useStorage } from '@vueuse/core'

const defaultPage = useStorage('defaultPage', '/timer')
const defaultFont = useStorage('defaultFont', 'Raleway')
const defaultTheme = useStorage('defaultTheme', 'Default')
</script>

<template>
    <Offcanvas :id="'menuOffcanvas'" :title="'Menu'" :icon="'bi-menu-app-fill'">
        <OffcanvasButton data-bs-toggle="offcanvas" href="#customizationOffcanvas" aria-controls="customizationOffcanvas">
            <i class="bi bi-palette-fill"></i> Customization
        </OffcanvasButton>
        <OffcanvasButton data-bs-toggle="offcanvas" href="#toolsOffcanvas" aria-controls="toolsOffcanvas">
            <i class="bi bi-tools"></i> Used Tools
        </OffcanvasButton>
        <OffcanvasButton data-bs-toggle="offcanvas" href="#aboutOffcanvas" aria-controls="aboutOffcanvas">
            <i class="bi bi-info-circle-fill"></i> About
        </OffcanvasButton>
        <a href="https://github.com/linvisn/linTime/" target="_blank">
            <OffcanvasButton>
                <i class="bi bi-github"></i> GitHub Repo
            </OffcanvasButton>
        </a>
    </Offcanvas>

    <Offcanvas :id="'aboutOffcanvas'" :title="'About'" :icon="'bi-info-circle-fill'" :prevOffcanvas="'menuOffcanvas'">
        <OffcanvasText>
        A simple app with usual Timer, Tabata Timer and Stopwatch, written in <OffcanvasLink link="https://nuxt.com/">Nuxt 3</OffcanvasLink> <i class="devicon-nuxtjs-plain"></i>
        </OffcanvasText>
        <OffcanvasText>
            Made by <OffcanvasLink link="https://github.com/linvisn">linvisn</OffcanvasLink> <i class="bi bi-github"></i> on September 9th 2024
        </OffcanvasText>
    </Offcanvas>

    <Offcanvas :id="'customizationOffcanvas'" :title="'Customization'" :icon="'bi-palette-fill'" :prevOffcanvas="'menuOffcanvas'">
        <OffcanvasText>Choose default page:</OffcanvasText>
        
        <OffcanvasRadio :id="'radio-defaultPage-timer'" v-model="defaultPage" :value="'/timer'">Timer</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultPage-stopwatch'" v-model="defaultPage" :value="'/stopwatch'">Stopwatch</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultPage-tabata'" v-model="defaultPage" :value="'/tabata'">Tabata</OffcanvasRadio>

        <OffcanvasText>Choose default font:</OffcanvasText>
        <OffcanvasRadio :id="'radio-defaultFont-raleway'" :style="{ 'font-family': 'Raleway' }" v-model="defaultFont" :value="'Raleway'">Raleway</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultFont-os'" :style="{ 'font-family': 'Open Sans' }" v-model="defaultFont" :value="'Open Sans'">Open Sans</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultFont-ns'" :style="{ 'font-family': 'Noto Serif' }" v-model="defaultFont" :value="'Noto Serif'">Noto Serif</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultFont-jm'" :style="{ 'font-family': 'JetBrains Mono' }" v-model="defaultFont" :value="'JetBrains Mono'">JetBrains Mono</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultFont-scp'" :style="{ 'font-family': 'Source Code Pro' }" v-model="defaultFont" :value="'Source Code Pro'">Source Code Pro</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultFont-geologica'" :style="{ 'font-family': 'Geologica' }" v-model="defaultFont" :value="'Geologica'">Geologica</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultFont-suse'" :style="{ 'font-family': 'SUSE' }" v-model="defaultFont" :value="'SUSE'">SUSE</OffcanvasRadio>
        
        <OffcanvasText>Choose default theme:</OffcanvasText>
        <OffcanvasRadio :id="'radio-defaultTheme-default'" v-model="defaultTheme" :value="'Default'">Default</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultTheme-mocha'" v-model="defaultTheme" :value="'Mocha'">Mocha</OffcanvasRadio>
        <OffcanvasRadio :id="'radio-defaultTheme-mf'" v-model="defaultTheme" :value="'Midnight Fireplace'">Midnight Fireplace</OffcanvasRadio>
    </Offcanvas>
  
    <Offcanvas :id="'toolsOffcanvas'" :title="'Tools'" :icon="'bi-tools'" :prevOffcanvas="'menuOffcanvas'">
        <OffcanvasText><OffcanvasLink link="https://nuxt.com/">Nuxt 3</OffcanvasLink> <i class="devicon-nuxtjs-plain"></i></OffcanvasText>
        <OffcanvasText><OffcanvasLink link="https://vueuse.org/">VueUse</OffcanvasLink> <i class="devicon-vuejs-plain"></i></OffcanvasText>
        <OffcanvasText><OffcanvasLink link="https://vuejs.org/">Vue.js 3</OffcanvasLink> <i class="devicon-vuejs-plain"></i></OffcanvasText>
        <OffcanvasText><OffcanvasLink link="https://getbootstrap.com/">Bootstrap 5</OffcanvasLink> <i class="devicon-bootstrap-plain"></i></OffcanvasText>
        <OffcanvasText><OffcanvasLink link="https://icons.getbootstrap.com/">Bootstrap Icons</OffcanvasLink> <i class="devicon-bootstrap-plain"></i></OffcanvasText>
        <OffcanvasText><OffcanvasLink link="https://devicon.dev/">Devicon</OffcanvasLink> <i class="devicon-devicon-plain"></i></OffcanvasText>
        <OffcanvasText><OffcanvasLink link="https://fonts.google.com/">Google Fonts</OffcanvasLink> <i class="devicon-google-plain"></i></OffcanvasText>
        <OffcanvasText><OffcanvasLink link="https://github.com/catppuccin/palette">Catppuccin Palettes</OffcanvasLink> <i class="bi bi-palette"></i></OffcanvasText>
    </Offcanvas>
</template>