<template>
  <button class="fs-4 px-3 py-2 m-2 rounded-4">
      <slot />
  </button>
</template>

<style scoped>
button {
  background-color: rgb(122, 41, 108);
}
button:hover {
  background-color: rgb(150, 49, 133);
}

.midnight-fireplace button {
  background-color: rgb(175, 63, 19);
}
.midnight-fireplace button:hover {
  background-color: rgb(201, 85, 40);
}

.mocha button {
  background-color: rgb(var(--ctp-mocha-surface1-rgb));
}
.mocha button:hover {
  background-color: rgb(var(--ctp-mocha-surface2-rgb));
}
</style>