<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Alternance N7</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="$router.push('/')">Accueil</v-btn>
    <v-btn text @click="$router.push('/alternance')">Alternance</v-btn>
    <v-btn text @click="$router.push('/about')">À propos</v-btn>
    <v-btn text @click="$router.push('/n7')">L'N7</v-btn>
    <v-btn icon @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'myCustomDarkTheme'
}
</script>
