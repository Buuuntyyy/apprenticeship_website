<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">L'Apprentissage en BUT : Un Atout Majeur</h2>
    <p class="mb-6">
      L'apprentissage, ou alternance, est une modalité de formation de plus en plus prisée. Elle permet de combiner enseignement théorique à l'IUT et expérience pratique en entreprise, tout en ayant un statut de salarié. C'est une voie exigeante mais extrêmement valorisée, tant pour l'insertion professionnelle que pour la poursuite d'études.
    </p>
    
    <v-row>
      <v-col cols="12" md="6">
        <v-card color="info" variant="tonal" class="fill-height text-center pa-4">
          <div class="text-h6">Part d'apprentis en 2ème année de BUT</div>
          <div class="text-h4 font-weight-bold my-2">{{ apprentissage.iutRate }}%</div>
          <div class="text-caption">
            Source: <a :href="apprentissage.iutSource.url" target="_blank" rel="noopener">{{ apprentissage.iutSource.name }}</a>
          </div>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card color="success" variant="tonal" class="fill-height text-center pa-4">
          <div class="text-h6">Part d'apprentis dans les formations d'ingénieurs</div>
          <div class="text-h4 font-weight-bold my-2">{{ apprentissage.engineerRate }}%</div>
          <div class="text-caption">
            Source: <a :href="apprentissage.engineerSource.url" target="_blank" rel="noopener">{{ apprentissage.engineerSource.name }}</a>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-alert
      type="info"
      variant="tonal"
      icon="mdi-lightbulb-on-outline"
      class="mt-6"
    >
      <strong>Un tremplin vers les écoles d'ingénieurs :</strong> Avoir réalisé son BUT en apprentissage est un avantage considérable pour les admissions parallèles. Cela démontre une maturité, une connaissance du monde de l'entreprise et des compétences pratiques très recherchées par les recruteurs des écoles.
    </v-alert>
        <v-alert
      type="error"
      variant="tonal"
      icon="mdi-alert"
      class="mt-6"
    >
      <strong>Un étudiant en IUT ne pourra, dans la grande majorité des cas, pousuivre qu'un cursus Ingénieur en filière Apprentissage </strong>
    </v-alert>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

interface Source {
  name: string;
  url: string;
}

interface ApprentissageData {
  iutRate: number;
  iutSource: Source;
  engineerRate: number;
  engineerSource: Source;
}

defineProps({
  apprentissage: {
    type: Object as PropType<ApprentissageData>,
    required: true,
  },
});
</script>
