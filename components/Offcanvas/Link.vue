<script setup>
defineProps({
    link: String
})
</script>

<template>
    <a class="offcanvas-link fw-semibold" target="_blank" :href="link">
      <slot />
    </a>
</template>

<style scoped>
.offcanvas-link {
    color: rgb(138, 172, 216) !important;
    text-decoration: underline !important;
}
.offcanvas-link:hover {
    color: rgb(169, 192, 223) !important;
}
</style>