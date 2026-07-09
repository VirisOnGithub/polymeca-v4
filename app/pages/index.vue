<script setup lang="ts">
</script>

<template>
  <div>
    <!-- overlay principal -->
    <img
      src="/car_overlay.jpg"
      alt="Photo montrant la voiture en train de concourir"
    >

    <!-- titre -->
    <div
      id="title"
      class="absolute top-1/2 left-1/2 text-7xl -translate-1/2 text-center"
      data-aos="fade-up"
    >
      Prêt pour la prochaine aventure ?
    </div>

    <!-- fondu -->
    <div
      id="hero"
      class="h-100 w-full absolute bg-linear-to-t from-primary to-transparent -translate-y-50"
    />

    <div class="h-50" />

    <TeamPresentation />
  </div>
</template>

<style scoped>
#hero {
  background: linear-gradient(transparent, #000 25%)
}
</style>
