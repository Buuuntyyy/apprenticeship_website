<template>
  <v-app>
    <TopBar />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style>
@import '@/styles/variables.css';

body {
  background-color: var(--background-color);
}
</style>
