<script setup lang="ts">
import BureauPresentation from './BureauPresentation.vue'
import PolePresentation from './PolePresentation.vue'
import ProfesseurPresentation from './ProfesseurPresentation.vue'
</script>

<template>
  <div>
    <h1
      class="text-center text-4xl"
      data-aos="fade-up"
    >
      L'équipe
    </h1>

    <!-- photo de groupe -->
    <div
      class="flex justify-center my-6"
      data-aos="fade-up"
    >
      <div class="w-full lg:w-[60%] mt-14 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-4">
        <div class="flex aspect-16/7 items-center justify-center rounded-[1.5rem] bg-linear-to-br from-primary/25 to-neutral-900 text-center">
          <LazyNuxtImg
            src="/equipe_canva.webp"
            alt="Photo de groupe"
            class="rounded-[1.5rem]"
          />
        </div>
      </div>
    </div>

    <BureauPresentation />
    <PolePresentation />
    <ProfesseurPresentation />
  </div>
</template>
