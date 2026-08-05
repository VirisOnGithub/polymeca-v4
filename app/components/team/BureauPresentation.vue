<script setup>
const bureau = [
  { role: 'Président', name: 'LENGLET Alex', icon: 'mdi:account-tie' },
  { role: 'Vice-président', name: 'Magnier Quentin', icon: 'mdi:account-star-outline' },
  { role: 'Trésorier', name: 'DEVEMY Kevin', icon: 'mdi:cash-multiple' },
  { role: 'Secrétaire', name: 'TIS Zakaria', icon: 'mdi:file-document-edit-outline' }
]
</script>

<template>
  <UContainer class="mb-5">
    <h1 class="text-center text-4xl my-4">
      Bureau
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
      <div
        v-for="(member, index) in bureau"
        :key="member.role"
        class="bg-neutral-100 dark:bg-neutral-900 m-2 p-4 rounded-2xl"
        data-aos="zoom-in-up"
        :data-aos-delay="index * 100"
      >
        <UIcon
          :name="member.icon"
          class="size-10 bg-secondary"
        />
        <p class="text-muted font-mono uppercase">
          {{ member.role }}
        </p>
        <p class="text-xl">
          {{ member.name }}
        </p>
      </div>
    </div>
  </UContainer>
</template>
