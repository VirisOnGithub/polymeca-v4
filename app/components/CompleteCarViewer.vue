<template>
  <div class="relative w-full">
    <div class="sticky top-0 left-0 z-[1] h-screen w-full">
      <ClientOnly>
        <TresCanvas clear-color="#0d1117">
          <TresPerspectiveCamera
            :position="[0, 1.5, 4.5]"
            :look-at="[0, 0, 0]"
          />

          <TresAmbientLight :intensity="1.2" />
          <TresDirectionalLight
            :position="[5, 5, 5]"
            :intensity="2"
          />
          <TresDirectionalLight
            :position="[-5, -2, -5]"
            :intensity="0.8"
            color="#3b82f6"
          />

          <TresGroup
            :position="[positionX, 1, 0]"
            :rotation="[rotationX, rotationY, 0]"
          >
            <Suspense>
              <GLTFModel
                path="/models/b.glb"
                draco
              />
            </Suspense>
          </TresGroup>
        </TresCanvas>
      </ClientOnly>
    </div>

    <div
      class="pointer-events-none relative z-2 -mt-screen mx-auto flex max-w-275 flex-col gap-[40vh] px-8 pt-[10vh] pb-[20vh] mt-[-100vh]"
    >
      <section
        class="pointer-events-auto max-w-137.5 rounded-2xl border border-white/10 bg-[#161b22]/85 p-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        <!-- <span
          class="mb-4 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400"
        >
          Modèle Original
        </span> -->

        <h1 class="mb-4 text-4xl font-bold text-secondary">
          Premier Modèle
        </h1>

        <p class="text-lg text-gray-400">
          Notre premier prototype
        </p>

        <div class="mt-8 animate-bounce text-sm text-gray-500">
          ↓ Scrollez pour explorer
        </div>
      </section>

      <section
        class="ml-auto pointer-events-auto max-w-137.5 rounded-2xl border border-white/10 bg-[#161b22]/85 p-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        <h2 class="mb-4 text-4xl font-bold text-secondary">
          Caractéristiques
        </h2>

        <p class="text-gray-300">
          Un véhicule de compétition conçu pour la performance pure et la légèreté.
        </p>

        <div class="mt-6 flex flex-col gap-4">
          <div
            class="flex justify-between rounded-lg bg-white/5 px-4 py-3"
          >
            <span class="text-gray-400">Poids :</span>
            <span class="font-bold text-gray-100">
              317 – 327 kg
            </span>
          </div>

          <div
            class="flex justify-between rounded-lg bg-white/5 px-4 py-3"
          >
            <span class="text-gray-400">Motorisation :</span>
            <span class="font-bold text-gray-100">
              Honda CBR600R (PC37)
            </span>
          </div>

          <div
            class="flex justify-between rounded-lg bg-white/5 px-4 py-3"
          >
            <span class="text-gray-400">Architecture :</span>
            <span class="font-bold text-gray-100">
              Châssis tubulaire sur-mesure
            </span>
          </div>
        </div>
      </section>

      <section
        class="pointer-events-auto ml-auto max-w-137.5 rounded-2xl border border-blue-500/50 bg-[#161b22]/85 p-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        <span
          class="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400"
        >
          En Développement
        </span>

        <h2 class="mb-4 text-4xl font-bold text-white">
          Le Projet de la Nouvelle
        </h2>

        <p class="text-gray-300">
          Forts de l'expérience acquise avec le premier modèle, nous développons
          la prochaine génération. Objectifs : réduction de la masse,
          optimisation de l'aérodynamisme et télémétrie avancée.
        </p>

        <ul class="mt-4 flex flex-col gap-2 text-gray-200">
          <li>⚡ Optimisation du rapport poids/puissance</li>
          <li>🏎️ Nouvelle géométrie de suspension</li>
          <li>📊 Intégration de capteurs IoT en temps réel</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GLTFModel } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'

const rotationX = ref(0)
const rotationY = ref(0)
const positionX = ref(0)

function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight

  if (maxScroll <= 0) return

  const scrollProgress = Math.min(Math.max(scrollTop / maxScroll, 0), 1)

  rotationY.value = scrollProgress * Math.PI * 2
  rotationX.value = Math.sin(scrollProgress * Math.PI) * 0.1

  positionX.value = Math.sin(scrollProgress * Math.PI * 2) * 1.5
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
