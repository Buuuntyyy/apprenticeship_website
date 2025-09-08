<template>
  <v-footer class="border-t-sm">
    <v-container fluid class="py-2">
      <v-row justify="space-between" align="center" no-gutters>
        <v-col cols="auto">
          <span class="text-caption">
            &copy; {{ new Date().getFullYear() }} — Guide des études dans l'Ingénierie
          </span>
        </v-col>
        <v-col cols="auto">
          <v-btn to="/mentions-legales" variant="text" size="small">
            Mentions Légales
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// Pas de script nécessaire pour ce composant simple
</script>
