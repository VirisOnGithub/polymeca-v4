<script setup>
const mainArticle = latestArticle()
const articles = allArticles()
</script>

<template>
  <div class="2xl:mx-100 xl:mx-60 lg:mx-40 md:mx-20">
    <h1 class="text-center text-7xl">
      Actualités
    </h1>
    <div v-if="mainArticle !== null">
      <h2 class="text-4xl">
        Dernier article
      </h2>
      <MainArticle
        :article="mainArticle[0]"
        :id-article="mainArticle[1]"
        :truncate="true"
      />
    </div>
    <h2 class="text-4xl">
      Nos autres articles
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <StandardArticleCard
        v-for="(article, id) in articles"
        :key="id"
        :article
        :id-article="id"
      />
    </div>
  </div>
</template>
