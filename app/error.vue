<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const handleClearError = () => clearError({ redirect: '/' })

useHead({
  title: 'Erreur',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/logo.png' }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>

<template>
  <NuxtLayout>
    <div class="h-4/5 w-full flex flex-col items-center gap-6">
      <h2 class="text-6xl">
        Erreur {{ props.error?.status }}
      </h2>
      <h4 class="text-3xl">
        {{ props.error?.statusText }}
      </h4>
      <UButton
        class="cursor-pointer"
        @click="handleClearError"
      >
        <UBadge
          color="secondary"
          variant="solid"
          size="xl"
          trailing-icon="i-lucide-arrow-right"
          class="rounded-lg hover:scale-110 duration-200 ease-in"
        >
          Revenir à l'accueil
        </UBadge>
      </UButton>
    </div>
  </NuxtLayout>
</template>
