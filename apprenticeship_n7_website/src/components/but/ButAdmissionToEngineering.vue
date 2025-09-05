<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Intégrer une École d'Ingénieurs après un BUT</h2>
    <p class="mb-6">
      La poursuite d'études en école d'ingénieurs est une voie privilégiée pour de nombreux diplômés de BUT. L'admission est sélective et se base principalement sur la qualité du dossier académique.
    </p>
    <v-list lines="two" variant="tonal">
      <v-list-item
        v-for="item in admissionSteps"
        :key="item.title"
        :prepend-icon="item.icon"
      >
        <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
defineProps({
  admissionSteps: {
    type: Array as () => Array<{ title: string; icon: string; text: string }>,
    required: true,
  },
});
</script>
