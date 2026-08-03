<script setup>
useHead({
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
const title = 'PolyMeca'
const description = 'Association d\'ingénieurs de Polytech Lyon avec un seul but en tête : les voitures !'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
