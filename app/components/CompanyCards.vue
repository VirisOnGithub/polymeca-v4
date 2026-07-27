<script setup lang="ts">
type Company = {
  name: string
  logo: string
  description: string
}

defineProps<{
  companies: Company[]
}>()
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 m-6">
    <article
      v-for="company in companies"
      :key="company.name"
      class="bg-gray-100/20 border border-secondary rounded-2xl p-6 transition-transform duration-250 hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        :src="`/logos/` + company.logo"
        :alt="company.name"
        class="h-12 w-auto object-contain mb-4"
      >

      <h3 class="font-bold text-[1.15rem] mb-3 text-secondary/60">
        {{ company.name }}
      </h3>

      <p class="text-gray-500 leading-relaxed">
        {{ company.description }}
      </p>
    </article>
  </div>
</template>
