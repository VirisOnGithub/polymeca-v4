<script setup>
const id = Number(useRoute().params.id)
if (!Number.isInteger(id)) {
  navigateTo('/')
}
const article = articleById(id)
</script>

<template>
  <MainArticle
    :article
    :id-article="id"
    :truncate="false"
  />
</template>
