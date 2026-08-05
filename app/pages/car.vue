<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef } from 'vue'
import { GLTFModel } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import gsap from 'gsap'

const colorMode = useColorMode()

definePageMeta({
  hideFrontSpace: true
})

const carGroupRef = shallowRef()
const cameraRef = shallowRef()
const isMobile = ref(false)

interface Slide {
  title: string
  badge: string
  description: string
  rotation: number[]
  positionDesktop: number[]
  positionMobile: number[]
  cameraZDesktop: number
  cameraZMobile: number
  specs?: object
}

const slides: Slide[] = [
  {
    title: 'Premier Modèle',
    badge: 'Prototype',
    description: 'Notre tout premier prototype conçu pour poser les bases de l’aérodynamisme et de la structure.',
    rotation: [0, 0.5, 0],
    positionDesktop: [1.5, -0.2, 0],
    positionMobile: [0, 0.6, 0],
    cameraZDesktop: 4.5,
    cameraZMobile: 6.0
  },
  {
    title: 'Caractéristiques',
    badge: 'Spécifications',
    description: 'Un véhicule de compétition optimisé pour la performance pure et la légèreté.',
    specs: {
      Poids: '317 – 327 kg',
      Motorisation: 'Honda CBR600R (PC37)',
      Architecture: 'Châssis tubulaire'
    },
    rotation: [0, Math.PI, 0],
    positionDesktop: [1.5, 0, 0],
    positionMobile: [0, 0.8, 0],
    cameraZDesktop: 3.8,
    cameraZMobile: 5.5
  },
  {
    title: 'Nouvelle voiture',
    badge: 'En Développement',
    description: 'En route pour un nouveau modèle intégrant de nouvelles technologies.',
    rotation: [0, Math.PI * 1.5, -Math.PI / 2 + 0.1],
    positionDesktop: [1.5, 0.1, 0],
    positionMobile: [0, 0.7, 0],
    cameraZDesktop: 2,
    cameraZMobile: 6.5
  }
]

const currentSlide = ref(0)

function updateResponsiveState() {
  isMobile.value = window.innerWidth < 990
  animateToSlide(currentSlide.value)
}

function animateToSlide(index: number) {
  const slide = slides[index]

  if (slide === undefined) {
    return
  }

  const targetPosY = isMobile.value ? slide.positionMobile[1] : slide.positionDesktop[1]
  const targetPosX = isMobile.value ? slide.positionMobile[0] : slide.positionDesktop[0]
  const targetPosZ = isMobile.value ? slide.positionMobile[2] || 0 : slide.positionDesktop[2] || 0
  const targetCamZ = isMobile.value ? slide.cameraZMobile : slide.cameraZDesktop

  if (carGroupRef.value) {
    gsap.to(carGroupRef.value.rotation, {
      x: slide.rotation[0],
      y: slide.rotation[1],
      z: slide.rotation[2],
      duration: 1.2,
      ease: 'power2.inOut'
    })

    gsap.to(carGroupRef.value.position, {
      x: targetPosX,
      y: targetPosY,
      z: targetPosZ,
      duration: 1.2,
      ease: 'power2.inOut'
    })
  }

  if (cameraRef.value) {
    gsap.to(cameraRef.value.position, {
      z: targetCamZ,
      duration: 1.2,
      ease: 'power2.inOut'
    })
  }
}

const getCurrentSlide = (slides: Slide[], index: number): Slide => {
  const slide = slides[index]
  if (slide === undefined) {
    return {
      title: '',
      badge: '',
      description: '',
      rotation: [],
      positionDesktop: [],
      positionMobile: [],
      cameraZDesktop: 0,
      cameraZMobile: 0
    }
  }
  return slide
}

function goToSlide(index: number) {
  if (index !== currentSlide.value) {
    currentSlide.value = index
    animateToSlide(index)
  }
}

function nextSlide() {
  if (currentSlide.value < slides.length - 1) {
    goToSlide(currentSlide.value + 1)
  }
}

function prevSlide() {
  if (currentSlide.value > 0) {
    goToSlide(currentSlide.value - 1)
  }
}

onMounted(() => {
  updateResponsiveState()
  window.addEventListener('resize', updateResponsiveState)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateResponsiveState)
})
</script>

<template>
  <!-- 100 vh - footer - main padding -->
  <div class="relative h-[calc(100vh-80px-40px)] w-full overflow-hidden bg-[#f3eee9] dark:bg-[#0d1117] text-white select-none">
    <div class="absolute inset-0 z-0">
      <ClientOnly>
        <TresCanvas :clear-color="colorMode.value === 'dark' ? '#0d1117' : '#f3eee9'">
          <TresPerspectiveCamera
            ref="cameraRef"
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

          <TresGroup ref="carGroupRef">
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

    <div class="relative z-10 flex h-full w-full flex-col justify-between p-4 sm:p-12 pointer-events-none">
      <div class="flex items-center justify-between pointer-events-auto">
        <div class="flex gap-2">
          <button
            v-for="(_, index) in slides"
            :key="index"
            class="h-2 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'w-8 bg-secondary-500' : 'w-2 bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40'"
            :aria-label="`Aller à la diapositive ${index + 1}`"
            @click="goToSlide(index)"
          />
        </div>
      </div>

      <div class="mt-auto mb-10 w-full max-w-lg pointer-events-auto">
        <Transition
          name="slide-fade"
          mode="out-in"
        >
          <div
            :key="currentSlide"
            class="rounded-2xl border border-black/10 dark:border-white/10 bg-[#eae4dd]/90 dark:bg-[#161b22]/90 p-5 sm:p-8 shadow-2xl backdrop-blur-xl"
          >
            <span
              v-if="getCurrentSlide(slides, currentSlide).badge"
              class="mb-2 sm:mb-3 inline-block rounded-full bg-secondary-500/20 px-3 py-1 text-xs font-semibold text-secondary-400"
            >
              {{ getCurrentSlide(slides, currentSlide).badge }}
            </span>

            <h1 class="mb-2 sm:mb-3 text-xl sm:text-3xl font-bold text-black dark:text-white">
              {{ getCurrentSlide(slides, currentSlide).title }}
            </h1>

            <p class="mb-4 sm:mb-6 text-xs sm:text-base text-gray-600 dark:text-gray-300">
              {{ getCurrentSlide(slides, currentSlide).description }}
            </p>

            <div
              v-if="getCurrentSlide(slides, currentSlide).specs"
              class="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm"
            >
              <div
                v-for="(val, key) in getCurrentSlide(slides, currentSlide).specs"
                :key="key"
                class="flex justify-between rounded-lg bg-black/5 dark:bg-white/5 px-3 py-2"
              >
                <span class="text-gray-500 dark:text-gray-400">{{ key }} :</span>
                <span class="font-semibold text-black dark:text-white">{{ val }}</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <div class="flex items-center justify-between pointer-events-auto">
        <UButton
          :disabled="currentSlide === 0"
          class="cursor-pointer flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-black dark:bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium transition hover:bg-dark/10 dark:hover:bg-white/10 disabled:cursor-not-allowed"
          @click="prevSlide"
        >
          ← Précédent
        </UButton>

        <UButton
          :disabled="currentSlide === slides.length - 1"
          class="cursor-pointer flex items-center gap-2 rounded-xl bg-secondary-600 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-white transition hover:bg-secondary-500 disabled:cursor-not-allowed"
          @click="nextSlide"
        >
          Suivant →
        </UButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(15px) scale(0.97);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-15px) scale(0.97);
  opacity: 0;
}
</style>
