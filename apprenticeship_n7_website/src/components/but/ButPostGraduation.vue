<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Que Font les Diplômés ?</h2>
    <p class="mb-6">
      La situation des diplômés 18 mois après l'obtention de leur diplôme montre que le BUT (anciennement DUT) est un véritable tremplin, que ce soit vers l'emploi ou vers des études plus longues.
    </p>
    
    <v-row>
      <v-col cols="12" md="6">
        <v-card variant="tonal" class="fill-height">
          <v-card-title>Situation Globale des Diplômés</v-card-title>
          <v-card-text>
            <v-list-item
              v-for="item in postGraduation.global"
              :key="item.label"
              :title="item.label"
              class="px-0"
            >
              <template v-slot:append>
                <div class="d-flex align-center">
                  <span class="font-weight-bold mr-4">{{ item.value }}%</span>
                  <div style="width: 120px">
                    <v-progress-linear :model-value="item.value" :color="item.color" height="8" rounded></v-progress-linear>
                  </div>
                </div>
              </template>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card variant="tonal" class="fill-height">
          <v-card-title>Focus sur la Poursuite d'Études</v-card-title>
          <v-card-subtitle>Répartition des 54% qui poursuivent leurs études</v-card-subtitle>
          <v-card-text>
            <v-list-item
              v-for="item in postGraduation.studies"
              :key="item.label"
              :title="item.label"
              class="px-0"
            >
              <template v-slot:append>
                <div class="d-flex align-center">
                  <span class="font-weight-bold mr-4">{{ item.value }}%</span>
                  <div style="width: 120px">
                    <v-progress-linear :model-value="item.value" :color="item.color" height="8" rounded></v-progress-linear>
                  </div>
                </div>
              </template>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div class="text-caption text-right mt-2">
      Source : <a :href="postGraduation.source.url" target="_blank" rel="noopener">{{ postGraduation.source.name }}</a> (Données sur les diplômés de DUT 2021)
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

interface PostGraduationData {
  label: string;
  value: number;
  color: string;
}

interface PostGraduationSource {
  name: string;
  url: string;
}

interface PostGraduation {
  source: PostGraduationSource;
  global: PostGraduationData[];
  studies: PostGraduationData[];
}

defineProps({
  postGraduation: {
    type: Object as PropType<PostGraduation>,
    required: true,
  },
});
</script>
