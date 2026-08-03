<script setup>
const route = useRoute()
</script>

<template>
  <UApp>
    <CustomHeader />

    <UMain class="bg-black font-[Racing_Sans_One] p-5">
      <div
        v-if="!route.meta.hideFrontSpace"
        class="h-50"
      />
      <slot />
    </UMain>

    <CustomFooter />
  </UApp>
</template>
