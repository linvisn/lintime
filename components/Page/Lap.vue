<script setup>
defineProps({
    id: Number,
    timeElapsed: String,
    timeElapsedFromStart: String,
    timeElapsedFromStartValue: Number
})
</script>

<template>
  <div class="lap mb-2 px-5 py-2 fs-4 border-top border-bottom rounded-3 row">
      <div class="left fw-semibold col-12 col-sm">
        <div>Lap {{ id }}</div>
        <div class="time-elapsed fw-medium">Time elapsed: {{ timeElapsed }}</div>
      </div>

      <div class="right fs-2 fw-semibold col">
        {{ timeElapsedFromStart }}
      </div>
  </div>
</template>

<style scoped>
.lap {
    border-color: rgba(255, 255, 255, 0.25) !important;
}

.time-elapsed {
    opacity: 0.75 !important;
}

.right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>