<template>
  <v-app-bar app color="primary">
    <AnimatedLogo @click="$router.push('/')" class="ml-2" :size="36" />
    <v-toolbar-title class="ml-2">CapSup'</v-toolbar-title>

    <v-tabs centered color="secondary" slider-color="secondary">
      <v-tab to="/">Accueil</v-tab>
      <v-tab to="/post-bac">Post-Bac</v-tab>
      
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ props }">
          <v-tab v-bind="props" to="/bac-plus-2">
            Bac +2
          </v-tab>
        </template>

        <v-list>
          <v-list-item to="/admission/post-prepa">
            <v-list-item-title>Post-Prépa</v-list-item-title>
          </v-list-item>
          <v-list-item to="/admission/post-but">
            <v-list-item-title>Post-BUT</v-list-item-title>
          </v-list-item>
          <v-list-item to="/admission/post-licence">
            <v-list-item-title>Post-Licences</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-tab to="/alternance">Alternance</v-tab>
      <v-tab to="/about">À propos</v-tab>
      <v-tab to="/ecoles">Les écoles</v-tab>
    </v-tabs>

    <v-spacer></v-spacer>

    <v-btn icon @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import AnimatedLogo from './AnimatedLogo.vue';

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'myCustomDarkTheme'
}
</script>
