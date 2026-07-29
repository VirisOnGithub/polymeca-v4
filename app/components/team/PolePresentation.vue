<script setup>
const poles = [
  {
    title: 'Pôle Aéro',
    members: 'Nicolas',
    description: 'Optimiser les flux d’air et améliorer l’appui aérodynamique de la voiture.',
    icon: 'mdi:weather-windy'
  },
  {
    title: 'Pôle Châssis',
    members: 'Lubin',
    description: 'Concevoir une structure solide, légère et adaptée aux contraintes de la compétition.',
    icon: 'i-custom-chassis'
  },
  {
    title: 'Pôle Train roulant',
    members: 'Nicolas',
    description: 'Travailler sur la liaison au sol, la dynamique véhicule et la tenue de route.',
    icon: 'mdi:car-tire-alert'
  },
  {
    title: 'Pôle Électronique',
    // members: 'À compléter',
    description: 'Développer les systèmes électroniques, l’acquisition de données et l’instrumentation.',
    icon: 'mdi:chip'
  },
  {
    title: 'Pôle Finance & Administration',
    members: 'Kevin, Zakaria',
    description: 'Assurer la gestion financière, administrative et organisationnelle de l’association.',
    icon: 'mdi:finance'
  },
  {
    title: 'Pôle Communication & Partenariats',
    members: 'CHOFFEL Clémence, MOITET Ethan, ABDELKAMEL Marwane',
    description: 'Valoriser le projet, animer les réseaux et construire des relations avec les partenaires.',
    icon: 'mdi:handshake-outline'
  }
]
</script>

<template>
  <UContainer class="mb-5">
    <h1 class="text-center text-4xl my-4">
      Pôles
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div
        v-for="member in poles"
        :key="member.role"
        class="bg-neutral-900 m-2 p-4 rounded-2xl flex gap-4"
        data-aos="fade-down"
      >
        <div>
          <div class="bg-secondary-300/15 size-15 rounded-2xl grid place-items-center">
            <UIcon
              :name="member.icon"
              class="size-10 bg-secondary"
            />
          </div>
        </div>
        <div>
          <p class="text-muted font-mono uppercase">
            {{ member.title }}
          </p>
          <p class="text-xl">
            {{ member.members }}
          </p>
          <p class="font-mono mt-5 text-sm">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
  </UContainer>
</template>
