<script setup>
import { useStorage } from '@vueuse/core'

const route = useRoute()
useHead({
  title: computed(() => `${route.name} - lintime`)
})

const defaultFont = useStorage('defaultFont', 'Raleway')
</script>

<template>
  <div class="d-flex flex-row vh-100 vw-100" :style="{ 'font-family': defaultFont }">
    <NuxtLayout>
      <Panel />
      <OffcanvasGroup />

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://unpkg.com/@catppuccin/palette/css/catppuccin.css');

* {
    padding: 0 !important;
    margin: 0 !important;

    font-size: inherit !important;
    color: white !important;
    text-decoration: none !important;
    user-select: none !important;

    border: none !important;
    outline: none !important;

    box-shadow: none !important;

    transition: all 0.25s ease !important;
}
</style>