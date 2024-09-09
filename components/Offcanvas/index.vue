<script setup>
defineProps({
    id: String,
    title: String,
    icon: String,
    prevOffcanvas: String
})
</script>

<template>
    <div class="offcanvas offcanvas-start border-end" :id="id">
      <div class="offcanvas-header d-flex justify-content-between px-4 py-3 fs-3">
        <button class="offcanvas-prev" v-if="prevOffcanvas" data-bs-toggle="offcanvas" :href="'#' + prevOffcanvas" :aria-controls="prevOffcanvas">
            <i class="bi bi-arrow-left-circle-fill"></i>
        </button>
        <span class="offcanvas-title fw-bold text-center">
            <i class="bi" :class="icon"></i> {{ title }}
        </span>
        <button class="offcanvas-close" data-bs-dismiss="offcanvas">
            <i class="bi bi-x-circle-fill"></i>
        </button>
      </div>
      <div class="offcanvas-body px-4 pt-2">
        <slot />
      </div>
    </div>
</template>

<style scoped>
.offcanvas {
    min-width: 25%;
    
    border-color: rgba(255, 255, 255, 0.5) !important;
}

.offcanvas-header {
    text-shadow: 0 0 1em black;

    background: linear-gradient(rgba(0, 0, 0, 0.25), transparent);
}

#menuOffcanvas {
    background: linear-gradient(163deg, rgb(52, 52, 161), rgb(196, 73, 221)) !important;
}
#customizationOffcanvas {
    background: linear-gradient(198deg, rgb(59, 204, 16), rgb(55, 137, 214))  !important;
}
#toolsOffcanvas {
    background: linear-gradient(124deg, rgb(148, 124, 15), rgb(30, 76, 102))  !important;
}
#aboutOffcanvas {
    text-align: center !important;

    background: linear-gradient(98deg, rgb(185, 82, 34), rgb(143, 6, 6)) !important;
}

.offcanvas-close, .offcanvas-prev {
    background: transparent !important;
    
    opacity: 0.75 !important;
}
.offcanvas-close i, .offcanvas-prev i {
    color: rgb(255, 255, 255) !important;
}
.offcanvas-close:hover, .offcanvas-prev:hover {
    opacity: 1 !important;
}
</style>