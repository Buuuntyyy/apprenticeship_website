<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-sheet rounded="lg" class="pa-6 pa-md-8" elevation="2">
          <h1 class="text-h4 my-4 text-center">À propos de ce site</h1>
          <p class="text-body-1">
            Ce site a pour but de fournir des informations claires et concises sur les différentes voies d'accès aux écoles d'ingénieurs en France, avec un focus particulier sur l'apprentissage.
          </p>
          <p class="text-body-1 mt-4">
            Naviguez à travers les différentes sections pour découvrir les parcours post-bac, les modalités d'admission, les écoles spécialisées par domaine, et des conseils pour votre insertion professionnelle.
          </p>
          <v-btn color="secondary" @click="$router.push('/')">
            Retour à l’accueil
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// rien pour l’instant
</script>