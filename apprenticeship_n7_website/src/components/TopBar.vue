<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Alternance N7</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="$router.push('/')">Accueil</v-btn>
    <v-btn text @click="$router.push('/alternance')">Alternance</v-btn>
    <v-btn text @click="$router.push('/about')">À propos</v-btn>
    <v-btn text @click="$router.push('/n7')">L'N7</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
</script>
