<script setup lang="ts">
definePageMeta({
  hideFrontSpace: true
})
</script>

<template>
  <div>
    <NuxtImg
      src="/car_front.jpg"
      alt="Photo montrant la voiture en train de concourir"
      class="z-1"
    />
    <!-- <div
      id="title"
      class="absolute top-20 md:top-1/2 left-1/2 text-2xl md:text-7xl -translate-1/2 text-center z-10"
      data-aos="fade-up"
    >
      Prêt pour la prochaine aventure ?
    </div> -->
    <div
      id="hero"
      class="lg:h-100 h-[calc(100%)] left-0 right-0 absolute bg-linear-to-t from-primary to-transparent -translate-y-1/4 lg:-translate-y-1/2 z-2"
    />

    <div class="z-3 relative">
      <div class="text-9xl relative text-center lg:translate-y-[-200%] mb-8">
        La voiture
      </div>
      <CompleteCarViewer />
    </div>
    <div class="grid place-items-center">
      <NuxtLink
        class="m-4 p-4 bg-secondary rounded-xl flex items-center gap-4"
        to="/gallery"
      >
        <span>Voir la galerie photo</span>
        <UIcon
          name="lucide:arrow-big-right"
        />
      </Nuxtlink>
    </div>
  </div>
</template>

<style scoped>
#hero {
  background: linear-gradient(transparent, #000 25%)
}
</style>
