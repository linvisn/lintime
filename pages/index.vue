<script setup>
import { useStorage } from '@vueuse/core'

definePageMeta({
  middleware: [
    function (to, from) {
      const defaultPage = useStorage('defaultPage', '/timer')

      return navigateTo(defaultPage.value)
    },
  ],
})
</script>

<template>
    
</template>