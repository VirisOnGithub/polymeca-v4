<script setup lang="ts">
type Company = {
  name: string
  logo: string
  description: string
}
const props = defineProps<{
  partners: Company[]
}>()
</script>

<template>
  <UMarquee
    class=" bg-gray-100/15"
  >
    <NuxtImg
      v-for="partner in props.partners"
      :key="partner.logo"
      :src="`/logos/` + partner.logo"
      class="h-10 m-5"
    />
  </UMarquee>
</template>
