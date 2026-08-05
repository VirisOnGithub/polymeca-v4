<script setup lang="ts">
definePageMeta({
  hideFrontSpace: true
})

// Données des statistiques
const stats = [
  { label: 'Membres passionnés', value: '50+' },
  { label: 'Année de création', value: '2023' },
  { label: 'Compétition', value: '1', detail: 'Formula Student' },
  { label: 'Partenaires de confiance', value: '10+' }
]

// Domaines de l'équipe
const domains = [
  { title: 'Mécanique', icon: 'i-heroicons-wrench-screwdriver', description: 'Conception du châssis, liaisons au sol et aérodynamisme.' },
  { title: 'Matériaux', icon: 'i-heroicons-beaker', description: 'Recherche et intégration de composites légers et résistants.' },
  { title: 'Informatique & Électronique', icon: 'i-heroicons-cpu-chip', description: 'Télémétrie, embarqué et systèmes d’acquisition de données.' }
]

// Événements marquants
const milestones = [
  {
    date: '2024 - 2025',
    title: 'Validation technique de la voiture',
    description: 'Franchissement avec succès des inspections de sécurité et validation du prototype pour la compétition.'
  },
  {
    date: 'Septembre 2025',
    title: 'Première participation à la Formula Student',
    location: 'Varano de\' Melegari (Italie)',
    description: 'Entrée officielle dans le circuit international sur le mythique Autodromo Varano de\' Melegari.'
  }
]
</script>

<template>
  <div class="relative overflow-x-hidden">
    <div class="relative">
      <NuxtImg
        src="/car_overlay.jpg"
        alt="Photo montrant la voiture en train de concourir"
        class="w-full h-screen object-cover z-1"
      />
      <div
        id="title"
        class="absolute top-full lg:top-1/2 left-1/2 text-5xl lg:text-7xl font-extrabold tracking-tight text-white -translate-x-1/2 -translate-y-full text-center z-10 w-full px-4"
      >
        Prêt pour la prochaine aventure ?
      </div>
    </div>

    <main class="relative z-10 space-y-24 py-12">
      <UContainer class="flex flex-col lg:flex-row gap-12">
        <div class="flex-1">
          <div class="text-center max-w-3xl mx-auto space-y-4">
            <UBadge
              color="secondary"
              variant="outline"
              size="md"
              class="rounded-full"
            >
              Qui sommes-nous ?
            </UBadge>
            <h2 class="text-3xl lg:text-4xl font-bold tracking-tight">
              L'ingénierie étudiante poussée à son maximum
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed">
              Fondée en 2023, notre association rassemble des étudiants passionnés par le sport automobile et l'innovation technologique.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-6 mt-12">
            <UCard
              v-for="(stat, index) in stats"
              :key="index"
              class="text-center hover:border-primary/50 transition-colors"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                {{ stat.value }}
              </div>
              <div class="font-semibold dark:text-gray-200 text-gray-400">
                {{ stat.label }}
              </div>
              <div
                v-if="stat.detail"
                class="text-xs text-gray-400 mt-1"
              >
                ({{ stat.detail }})
              </div>
            </UCard>
          </div>
        </div>
        <div class="flex-1 w-full flex flex-col justify-evenly items-center gap-24">
          <div class="w-full mt-14 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-4">
            <div class="flex aspect-16/7 items-center justify-center rounded-[1.5rem] bg-linear-to-br from-primary/25 to-neutral-900 text-center">
              <LazyNuxtImg
                src="/equipe_canva.webp"
                alt="Photo de groupe"
                class="rounded-[1.5rem]"
              />
            </div>
          </div>
          <NuxtLink to="/team">
            <UBadge
              color="secondary"
              variant="solid"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="rounded-lg hover:scale-110 duration-200 ease-in text-black"
            >
              Voir notre équipe
            </UBadge>
          </NuxtLink>
        </div>
      </UContainer>

      <UContainer class="p-5 border-secondary relative">
        <div class="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-secondary to-transparent" />
        <div class="absolute top-0 inset-x-0 h-1/2 bg-linear-to-b from-secondary-500/10 to-transparent" />
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h3 class="text-2xl lg:text-3xl font-bold">
            Une équipe pluridisciplinaire
          </h3>
          <p class="text-gray-400 mt-2">
            La force de notre projet réside dans la complémentarité de nos pôles d'ingénierie.
          </p>
          <div class="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-secondary to-transparent" />
          <div class="absolute bottom-0 inset-x-0 h-1/2 bg-linear-to-t from-secondary-500/10 to-transparent" />
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <UCard
            v-for="(domain, index) in domains"
            :key="index"
            class="relative group"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="flex items-center gap-4 mb-4">
              <UIcon
                :name="domain.icon"
                class="w-8 h-8 text-secondary-500"
              />
              <h4 class="text-xl font-bold">
                {{ domain.title }}
              </h4>
            </div>
            <p class="text-gray-400 text-sm">
              {{ domain.description }}
            </p>
          </UCard>
        </div>
      </UContainer>

      <UContainer>
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h3 class="text-2xl lg:text-3xl font-bold">
            Nos événements marquants
          </h3>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
          <div
            v-for="(event, index) in milestones"
            :key="index"
            class="rounded-2xl border-2 border-transparent bg-origin-border [background-clip:padding-box,border-box] dark:bg-[linear-gradient(to_right_top,var(--ui-bg),var(--ui-bg)),linear-gradient(to_right_top,#0f172a,var(--color-secondary))] bg-[linear-gradient(to_right_top,var(--ui-bg),var(--ui-bg)),linear-gradient(to_right_top,#fff,var(--color-secondary))] hover:scale-102 p-6 duration-200"
          >
            <div class="relative pl-8 border-l-2 border-primary/30 transition-colors py-2">
              <div class="absolute -left-2.25 top-3 w-4 h-4 rounded-full bg-black dark:bg-white" />

              <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h4 class="text-xl font-bold">
                  {{ event.title }}
                </h4>
                <span class="text-sm font-semibold text-primary tracking-wide">
                  {{ event.date }}
                </span>
              </div>
              <p
                v-if="event.location"
                class="text-xs font-mono mb-2"
              >
                <UBadge
                  icon="mdi:google-maps"
                  color="secondary"
                  variant="outline"
                >
                  {{ event.location }}
                </UBadge>
              </p>
              <p class="text-gray-400 dark:text-gray-300 text-sm">
                {{ event.description }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </main>
  </div>
</template>

<style scoped>
#hero {
  background: linear-gradient(transparent, var(--ui-bg, #000) 75%);
}
</style>
