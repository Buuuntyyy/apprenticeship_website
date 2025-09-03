<template>
  <v-app>
    <TopBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
</script>

<style>
@import '@/styles/variables.css';

body {
  background-color: var(--background-color);
}
</style>
