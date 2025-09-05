<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">À Quoi S'attendre en Prépa ?</h2>
    <p class="mb-6">La prépa est une expérience unique, rythmée par des méthodes de travail spécifiques qui visent l'excellence et la préparation intensive aux concours.</p>
    <v-row>
      <v-col v-for="item in items" :key="item.title" cols="12" md="6">
        <v-card class="fill-height" variant="outlined">
          <v-card-title class="d-flex align-center">
            <v-icon :icon="item.icon" start color="primary"></v-icon>
            {{ item.title }}
          </v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array as () => Array<{ title: string; icon: string; text: string }>,
    required: true,
  },
});
</script>
