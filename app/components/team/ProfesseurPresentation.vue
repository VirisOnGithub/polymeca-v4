<script setup>
const teachers = [
  { name: 'DI PIERO Bastien', role: 'Professeur encadrant' }
]
</script>

<template>
  <UContainer class="mb-5">
    <h1 class="text-center text-4xl my-4">
      Professeurs
    </h1>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div
        v-for="member in teachers"
        :key="member.role"
        class="bg-neutral-100 dark:bg-neutral-900 m-2 p-4 rounded-2xl flex gap-6 items-center"
      >
        <div>
          <div class="bg-secondary-300/15 size-15 rounded-2xl grid place-items-center">
            <UIcon
              name="mdi:school-outline"
              class="size-10 bg-secondary"
            />
          </div>
        </div>
        <div>
          <p class="text-muted font-mono uppercase">
            {{ member.role }}
          </p>
          <p class="text-xl">
            {{ member.name }}
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="h-50" /> -->
  </UContainer>
</template>
