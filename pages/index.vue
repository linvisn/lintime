<script setup>
import { useFavicon, useStorage } from '@vueuse/core'

definePageMeta({
  middleware: [
    function (to, from) {
      const defaultPage = useStorage('defaultPage', '/timer')

      useFavicon(`${defaultPage.value}.svg`)
      return navigateTo(defaultPage.value)
    },
  ],
})
</script>

<template>
    
</template>