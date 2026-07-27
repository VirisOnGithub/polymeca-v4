<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'

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
  <Vue3Marquee
    :clone="true"
    :duration="10"
    class=" bg-gray-100/15"
  >
    <NuxtImg
      v-for="partner in props.partners"
      :key="partner.logo"
      :src="`/logos/` + partner.logo"
      class="h-10 m-5"
    />
  </Vue3Marquee>
</template>
