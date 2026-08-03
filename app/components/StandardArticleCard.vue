<script setup lang="ts">
const props = defineProps<{
  article: {
    splash: string
    title: string
    description: string
    additional_images: string[]
    date: Date
  }
  idArticle: number
}>()

const truncated_desc = props.article.description.slice(0, 50) + '... '
</script>

<template>
  <NuxtLink :to="`/articles/` + idArticle">
    <UCard>
      <div class="h-48 overflow-hidden rounded-t-lg">
        <img
          :src="props.article.splash"
          :alt="props.article.title"
          class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        >
      </div>
      <div class="mt-2">
        {{ props.article.title }}
        <div class="text-muted text-sm">{{ truncated_desc }} <NuxtLink class="underline">Voir plus</NuxtLink></div>
      </div>
    </UCard>
  </NuxtLink>
</template>
