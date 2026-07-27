<script setup lang="ts">
const route = useRoute()

const mobileOpen = ref(false)

const links = [
  {
    label: 'Accueil',
    to: '/'
  },
  {
    label: 'Équipe',
    to: '/team'
  },
  {
    label: 'Partenaires',
    to: '/partnerships'
  },
  {
    label: 'Voiture',
    to: '/car'
  },
  {
    label: 'Actualités',
    to: '/news'
  }
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }

  return route.path.startsWith(path)
}
</script>

<template>
  <header
    class="
    sticky top-0 z-50
    border-b border-gray-200/60
    dark:border-gray-800/60
    bg-white/80
    dark:bg-gray-950/80
    backdrop-blur-xl
  "
  >
    <nav
      class="
      mx-auto flex h-20 max-w-7xl
      items-center justify-between
      px-4 sm:px-6 lg:px-8
    "
    >
      <!-- Logo -->

      <NuxtLink
        to="/"
        class="
        flex items-center gap-3
        group
      "
      >

        <NuxtImg
          src="/logo.png"
          alt="Logo de PolyMeca"
          class="
          h-30 w-30
          object-contain
          transition-transform duration-300
          group-hover:scale-105
        "
        />

      </NuxtLink>

      <!-- Navigation desktop -->

      <div
        class="
        hidden md:flex
        items-center
        gap-1
        h-full
      "
      >
        <UButton
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          variant="ghost"
          color="neutral"
          :class="[
            'group relative h-full rounded-none px-4',
            'transition-all duration-300',
            'hover:-translate-y-0.5',
            isActive(link.to)
              ? 'text-primary-500'
              : 'text-gray-600 dark:text-gray-300'
          ]"
        >
          <span
            class="
            transition-colors
            duration-300
            group-hover:text-primary-500
          "
          >
            {{ link.label }}
          </span>
        </UButton>
      </div>

      <!-- Bouton mobile -->

      <UButton
        class="md:hidden"
        icon="i-lucide-menu"
        variant="ghost"
        color="neutral"
        @click="mobileOpen = true"
      />
    </nav>
  </header>

  <!-- Menu mobile -->

  <USlideover
    v-model:open="mobileOpen"
    side="right"
  >
    <template #content>
      <div
        class="
    flex
    h-full
    flex-col
    p-6
  "
      >
        <!-- Header menu -->

        <div
          class="
      flex
      items-center
      justify-between
      mb-8
    "
        >
          <div class="flex items-center gap-3">
            <NuxtImg
              src="/logo.png"
              alt="Logo"
              class="h-10 w-10 object-contain"
            />

            <span class="font-semibold">
              Menu
            </span>
          </div>

          <UButton
            icon="i-lucide-x"
            variant="ghost"
            color="neutral"
            @click="mobileOpen = false"
          />
        </div>

        <!-- Liens -->

        <nav
          class="
      flex
      flex-col
      gap-2
    "
        >
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            :class="[
              'rounded-lg px-4 py-3',
              'transition-all duration-200',
              isActive(link.to)
                ? 'bg-primary-500/10 text-primary-500 font-medium'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
            @click="mobileOpen = false"
          >

            {{ link.label }}

          </NuxtLink>
        </nav>

        <!-- Bas du menu -->

        <div
          class="
      mt-auto
      border-t
      pt-6
    "
        >
          <UButton
            block
            to="/contact"
            icon="i-lucide-mail"
          >
            Nous rejoindre
          </UButton>
        </div>
      </div>
    </template>
  </USlideover>
</template>
