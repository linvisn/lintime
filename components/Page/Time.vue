<template>
  <div class="time d-flex justify-content-center align-items-center flex-column flex-wrap column-gap-4 mx-auto mb-4 py-1 text-center">
    <slot />
  </div>
</template>

<style scoped>
.time {
  width: fit-content;

  font-size: 3rem !important;
  font-weight: 800 !important;
}
</style>