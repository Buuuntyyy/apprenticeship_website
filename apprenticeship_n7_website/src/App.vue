<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Mon App Vue + Vuetify</v-toolbar-title>
      <v-spacer />
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/about">À propos</RouterLink>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// Pas besoin de code ici
</script>
