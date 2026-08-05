<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Équipe', to: '/team' },
  { label: 'Partenaires', to: '/partnerships' },
  { label: 'Voiture', to: '/car' },
  { label: 'Actualités', to: '/news' }
]

const isLinkActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// color mode
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})
</script>

<template>
  <header
    class="
      sticky top-0 z-50
      border-b border-gray-200/60 dark:border-gray-800/60
      bg-white/80 dark:bg-gray-950/80
      backdrop-blur-xl
      font-[Racing_Sans_One]
    "
  >
    <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 group"
      >
        <NuxtImg
          src="/logo.png"
          alt="Logo de PolyMeca"
          class="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </NuxtLink>

      <div class="hidden md:flex items-center gap-1 h-full">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          :class="[
            'group relative flex items-center h-full px-4 text-sm font-medium transition-colors duration-300',
            isLinkActive(link.to)
              ? 'text-primary-500'
              : 'text-gray-600 dark:text-gray-300 hover:text-primary-500'
          ]"
        >
          <span>{{ link.label }}</span>

          <span
            :class="[
              'absolute bottom-0 left-0 h-0.5 w-full bg-secondary origin-left transition-transform duration-300 ease-out',
              isLinkActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            ]"
          />
        </NuxtLink>

        <ClientOnly v-if="!colorMode?.forced">
          <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
            @click="isDark = !isDark"
          />

          <template #fallback>
            <div class="size-8" />
          </template>
        </ClientOnly>
      </div>

      <UButton
        class="md:hidden"
        icon="i-lucide-menu"
        variant="ghost"
        color="neutral"
        @click="mobileOpen = true"
      />
    </nav>
  </header>

  <USlideover
    v-model:open="mobileOpen"
    side="right"
  >
    <template #content>
      <div class="flex h-full flex-col p-6">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-3">
            <NuxtImg
              src="/logo.png"
              alt="Logo"
              class="h-10 w-10 object-contain"
            />
            <span class="font-semibold">Menu</span>
          </div>

          <UButton
            icon="i-lucide-x"
            variant="ghost"
            color="neutral"
            @click="mobileOpen = false"
          />
        </div>

        <nav class="flex flex-col gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            :class="[
              'rounded-lg px-4 py-3 transition-all duration-200',
              isLinkActive(link.to)
                ? 'bg-primary-500/10 text-primary-500 font-medium'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="mt-auto border-t pt-6">
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
