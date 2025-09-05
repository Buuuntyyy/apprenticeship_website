<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h3 text-center mb-4">L'Insertion Professionnelle après des Études d'Ingénierie</h1>
        <p class="text-body-1 text-center mb-10">
          Découvrez les chiffres clés, les salaires et les secteurs qui recrutent les jeunes diplômés, basés sur les dernières enquêtes nationales.
        </p>

        <v-tabs v-model="tab" grow background-color="transparent" color="primary" class="mb-6">
          <v-tab value="bac5">Niveau Bac +5 (Ingénieur)</v-tab>
          <v-tab value="bac3">Niveau Bac +3 (BUT / Licence)</v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <!-- TAB BAC +5 -->
          <v-window-item value="bac5">
            <h2 class="text-h4 mb-6 text-center">Diplôme d'Ingénieur (Bac +5)</h2>
            
            <v-row>
              <v-col cols="12" md="4">
                <v-card color="primary" variant="tonal" class="fill-height text-center pa-4">
                  <div class="text-h6">Salaire Annuel Brut Moyen</div>
                  <div class="text-h4 font-weight-bold my-2">36 500€</div>
                  <div class="text-caption">(Hors primes, 1er emploi)</div>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card color="success" variant="tonal" class="fill-height text-center pa-4">
                  <div class="text-h6">Taux d'emploi net global</div>
                  <div class="text-h4 font-weight-bold my-2">91.5%</div>
                  <div class="text-caption">(Moins de 6 mois après diplôme)</div>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card color="info" variant="tonal" class="fill-height text-center pa-4">
                  <div class="text-h6">Stabilité de l'emploi</div>
                  <div class="text-h4 font-weight-bold my-2">86% en CDI</div>
                  <div class="text-caption">(Parmi les diplômés en activité)</div>
                </v-card>
              </v-col>
            </v-row>

            <h3 class="text-h5 mt-10 mb-4">Salaires moyens par grand domaine</h3>
            <v-card variant="outlined">
              <v-list>
                <v-list-item v-for="domain in bac5SalariesByDomain" :key="domain.name">
                  <v-list-item-title>{{ domain.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ domain.salary }} € / an</v-list-item-subtitle>
                  <template v-slot:append>
                    <div style="width: 150px">
                      <v-progress-linear :model-value="domain.percentage" :color="domain.color" height="10" rounded></v-progress-linear>
                    </div>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>

            <h3 class="text-h5 mt-10 mb-4">Sources et pour aller plus loin</h3>
            <v-alert icon="mdi-file-document-outline" variant="tonal" color="primary">
              Ces chiffres sont issus de la dernière enquête d'insertion de la Conférence des Grandes Écoles (CGE).
              <br>
              <a href="https://www.cge.asso.fr/ressources/enquete-insertion-2024/" target="_blank" rel="noopener">Consulter l'enquête complète de la CGE (Promotion 2023)</a>
            </v-alert>
          </v-window-item>

          <!-- TAB BAC +3 -->
          <v-window-item value="bac3">
            <h2 class="text-h4 mb-6 text-center">Diplômes Techniques (Bac +3)</h2>
            
            <v-row>
              <v-col cols="12" md="6">
                <v-card variant="tonal" class="fill-height text-center pa-4">
                  <div class="text-h6">Taux d'insertion professionnelle</div>
                  <div class="text-h4 font-weight-bold my-2">90%</div>
                  <div class="text-caption">(Pour les diplômés de BUT, 6 mois après)</div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="tonal" class="fill-height text-center pa-4">
                  <div class="text-h6">Poursuite d'études</div>
                  <div class="text-h4 font-weight-bold my-2">> 50%</div>
                  <div class="text-caption">(Majoritairement en Master ou École d'ingénieur)</div>
                </v-card>
              </v-col>
            </v-row>

            <h3 class="text-h5 mt-10 mb-4">Répartition par secteur</h3>
            <p>Les diplômés de niveau Bac +3 s'insèrent principalement dans :</p>
            <ul>
              <li>Les sociétés de conseil et bureaux d'études (notamment les ESN/SSII).</li>
              <li>L'industrie manufacturière (aéronautique, automobile, mécanique).</li>
              <li>Le secteur de la construction (BTP).</li>
              <li>Les activités informatiques et services d'information.</li>
            </ul>

            <h3 class="text-h5 mt-10 mb-4">Sources et pour aller plus loin</h3>
             <v-alert icon="mdi-file-document-outline" variant="tonal" color="info">
              Ces données sont des synthèses issues des enquêtes du Ministère de l'Enseignement Supérieur et de la Recherche (MESR).
              <br>
              <a href="https://www.enseignementsup-recherche.gouv.fr/fr/l-insertion-professionnelle-des-diplomes-de-l-universite-90247" target="_blank" rel="noopener">Consulter les chiffres de l'insertion des diplômés de l'université</a>
            </v-alert>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('bac5');

const bac5SalariesByDomain = ref([
  { name: 'Informatique & Numérique', salary: '43,000', percentage: 100, color: 'blue' },
  { name: 'Généraliste (Conseil, Finance)', salary: '41,500', percentage: 96, color: 'green' },
  { name: 'Aéronautique & Spatial', salary: '39,000', percentage: 90, color: 'purple' },
  { name: 'Physique, Chimie & Matériaux', salary: '38,000', percentage: 88, color: 'orange' },
  { name: 'Agronomie & Vivant', salary: '35,500', percentage: 82, color: 'teal' },
]);
</script>
