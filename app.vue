<script setup>
import { useStorage } from '@vueuse/core'

const route = useRoute()
const title = computed(() => `${route.meta.title} - linTime`)

useHead({
  title: title,
  link: [
    { rel: 'icon', href: '/linTime/logo.png' }
  ]
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