<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 my-4 text-center">Les Écoles d'Ingénieurs</h1>
        <p class="text-body-1 mb-4">
          Découvrez une sélection d'écoles d'ingénieurs réputées proposant des cursus en alternance.
        </p>
        <v-list lines="two">
          <v-list-item
            v-for="school in schools"
            :key="school.name"
            :href="school.url"
            target="_blank"
            rel="noopener"
          >
            <v-list-item-title>{{ school.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ school.description }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const schools = ref([
  { name: 'ENSEEIHT', description: 'Toulouse - Numérique, Électronique, Hydraulique, Télécommunications.', url: 'https://www.enseeiht.fr' },
  { name: 'INSA Toulouse', description: 'Institut National des Sciences Appliquées de Toulouse.', url: 'https://www.insa-toulouse.fr' },
  { name: 'ISAE-SUPAERO', description: 'Institut Supérieur de l\'Aéronautique et de l\'Espace.', url: 'https://www.isae-supaero.fr' },
  { name: 'Mines-Albi', description: 'École Nationale Supérieure des Mines d\'Albi-Carmaux.', url: 'https://www.imt-mines-albi.fr' },
]);
</script>
