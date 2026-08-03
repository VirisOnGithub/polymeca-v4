<script setup lang="ts">
definePageMeta({
  hideFrontSpace: true
})
</script>

<template>
  <div>
    <!-- overlay principal -->
    <NuxtImg
      src="/car_overlay.jpg"
      alt="Photo montrant la voiture en train de concourir"
      class="z-1"
    />
    <!-- titre -->
    <div
      id="title"
      class="absolute top-full lg:top-1/2 left-1/2 text-5xl lg:text-7xl -translate-x-1/2 -translate-y-full text-center z-10"
    >
      Prêt pour la prochaine aventure ?
    </div>

    <!-- fondu -->
    <div
      id="hero"
      class="lg:h-100 h-[calc(100%)] left-0 right-0 absolute bg-linear-to-t from-primary to-transparent -translate-y-1/4 lg:-translate-y-1/2 z-2"
    />

    <div class="h-screen lg:h-50" />
  </div>
</template>

<style scoped>
#hero {
  background: linear-gradient(transparent, #000 25%)
}
</style>
