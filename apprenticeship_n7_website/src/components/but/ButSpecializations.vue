<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Spécialités de BUT et IUT par Domaine</h2>
    <p class="mb-6">
      Le choix de votre spécialité de BUT (aussi appelée "mention") est déterminant pour la poursuite d'études. Voici quelques-unes des spécialités les plus pertinentes pour intégrer une école d'ingénieurs, regroupées par grand domaine.
    </p>
    <v-expansion-panels variant="popout">
      <v-expansion-panel
        v-for="domain in specializations"
        :key="domain.name"
      >
        <v-expansion-panel-title class="text-h6">
          <v-icon :color="domain.color" start>{{ domain.icon }}</v-icon>
          {{ domain.name }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list lines="two" density="compact">
            <div v-for="spec in domain.buts" :key="spec.name">
              <v-list-item>
                <v-list-item-title class="font-weight-bold">{{ spec.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ spec.description }}</v-list-item-subtitle>
              </v-list-item>
              <div class="pl-4 mb-2">
                <v-chip 
                  v-for="iut in spec.iuts" 
                  :key="iut.name" 
                  label 
                  size="small" 
                  class="ma-1"
                  link
                  :href="iut.url"
                  target="_blank"
                  rel="noopener"
                >
                  {{ iut.name }}
                </v-chip>
              </div>
              <v-divider class="my-2"></v-divider>
            </div>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

interface Iut {
  name: string;
  url: string;
}

interface ButSpecialization {
  name: string;
  description: string;
  iuts: Iut[];
}

interface Domain {
  name: string;
  icon: string;
  color: string;
  buts: ButSpecialization[];
}

defineProps({
  specializations: {
    type: Array as PropType<Domain[]>,
    required: true,
  },
});
</script>
