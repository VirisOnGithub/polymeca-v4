<script setup lang="ts">
// Récupération de l'erreur transmise par Nuxt
defineProps({
  error: Object
})

// Fonction pour nettoyer l'erreur et rediriger
const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error-container">
    <template v-if="error?.statusCode === 404">
      <h1>404</h1>
      <h2>Oups ! Page introuvable.</h2>
      <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
    </template>

    <template v-else>
      <h1>{{ error?.statusCode || 'Erreur' }}</h1>
      <h2>Une erreur est survenue</h2>
      <p>{{ error?.statusMessage || 'Un problème inattendu s\'est produit.' }}</p>
    </template>

    <button @click="handleClearError">
      Retourner à l'accueil
    </button>
  </div>
</template>
