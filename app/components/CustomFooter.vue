<script setup lang="ts">
const socials = [
  {
    link: 'https://www.instagram.com/polytechracingteam/',
    aria_label: 'Instagram',
    icon: 'i-simple-icons-instagram'
  },
  {
    link: 'https://www.linkedin.com/company/poly-mechanic/',
    aria_label: 'LinkedIn',
    icon: 'i-simple-icons-linkedin'
  },
  {
    link: 'https://www.facebook.com/polymechanicasso/',
    aria_label: 'Facebook',
    icon: 'i-simple-icons-facebook'
  }
]
</script>

<template>
  <UFooter class="bg-black">
    <template #left>
      <div>
        <p class="text-sm text-muted">
          POLYTECH RACING TEAM
        </p>
        <NuxtImg
          src="/logo.png"
          class="h-20"
        />
      </div>
    </template>

    <div class="grid gap-6 text-sm md:grid-cols-2">
      <div>
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
          Contact
        </p>

        <ul class="space-y-3 text-white/60">
          <li class="flex items-start gap-2">
            <UIcon
              name="mdi:email-outline"
              class="mt-0.5 size-5 bg-secondary"
            />
            <a
              href="mailto:polymechanicasso@gmail.com"
              class="transition-colors hover:text-primary"
            >
              polymechanicasso@gmail.com
            </a>
          </li>

          <li class="flex items-start gap-2">
            <UIcon
              name="mdi:phone-off-outline"
              class="mt-0.5 size-5 bg-secondary"
            />
            <span>Pas de numéro de téléphone</span>
          </li>
        </ul>
      </div>

      <div>
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
          Adresse
        </p>

        <div class="flex items-start gap-2 text-white/60">
          <UIcon
            name="mdi:map-marker"
            class="mt-0.5 size-5 bg-secondary"
          />
          <div class="leading-relaxed">
            <p>POLYTECH LYON</p>
            <p>15 boulevard André Latarjet</p>
            <p>69100 Villeurbanne</p>
          </div>
        </div>
      </div>
    </div>

    <template #right>
      <UButton
        v-for="social in socials"
        :key="social.aria_label"
        :to="social.link"
        target="_blank"
        :icon="social.icon"
        :aria-label="social.aria_label"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
