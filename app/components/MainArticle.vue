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
  truncate?: boolean
}>()

const truncated_desc = props.article.description.slice(0, 100) + '...'
</script>

<template>
  <UCard class="bg-gray-800 rounded-xl p-6">
    <div class="h-64 sm:h-80 lg:h-full overflow-hidden rounded-lg">
      <img
        :src="props.article.splash"
        :alt="props.article.title"
        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
      >
    </div>

    <template #footer>
      <div class="text-xl">
        {{ props.article.title }}
      </div>
      <div
        v-if="truncate"
        class="text-muted"
      >
        {{ truncated_desc }}
        <NuxtLink
          :to="`/articles/` + idArticle"
          class="underline hover:text-white duration-100 cursor-pointer"
        >Voir plus</NuxtLink>
      </div>
      <div
        v-else
        class="text-muted"
      >
        {{ props.article.description }}

        <UCarousel
          v-slot="{ item }"
          :items="props.article.additional_images"
          arrows
          class="w-full max-w-xs mx-auto"
        >
          <NuxtImg :src="item" />
        </UCarousel>
      </div>
    </template>
  </UCard>
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>
