<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h4 my-4 text-center">S'orienter après le Baccalauréat</h1>
        <p class="text-body-1 text-center mb-8">
          Après le bac, plusieurs voies s'offrent à vous pour intégrer une école d'ingénieur. Découvrez les principaux parcours et choisissez celui qui vous correspond le mieux.
        </p>

        <EducationSchema />

        <v-card class="mb-6" variant="tonal" hover to="/prepa">
          <v-card-title class="text-h5">
            <v-icon start>mdi-calculator-variant</v-icon>
            Classe Préparatoire aux Grandes Écoles (CPGE)
          </v-card-title>
          <v-card-text>
            La voie royale pour intégrer les écoles les plus prestigieuses. Deux années intenses de formation scientifique (Maths Sup / Maths Spé) qui préparent aux concours d'entrée. C'est un parcours exigeant mais très formateur.
          </v-card-text>
        </v-card>

        <v-card class="mb-6" variant="tonal" hover to="/but">
          <v-card-title class="text-h5">
            <v-icon start>mdi-office-building</v-icon>
            Bachelor Universitaire de Technologie (BUT)
          </v-card-title>
          <v-card-text>
            Anciennement DUT, le BUT est une formation en 3 ans qui allie théorie et pratique, avec une forte dimension professionnelle. Les meilleurs étudiants peuvent intégrer une école d'ingénieur sur dossier après leur 2ème ou 3ème année de BUT.
          </v-card-text>
        </v-card>

        <v-card class="mb-6" variant="tonal" hover to="/licence">
          <v-card-title class="text-h5">
            <v-icon start>mdi-school</v-icon>
            Licence Scientifique
          </v-card-title>
          <v-card-text>
            Un parcours universitaire classique (L1, L2, L3) dans des domaines comme les mathématiques, la physique, la chimie ou l'informatique. Les admissions se font sur dossier en fin de L2 ou L3.
          </v-card-text>
        </v-card>

        <v-card class="mb-6" variant="tonal" hover to="/bts">
          <v-card-title class="text-h5">
            <v-icon start>mdi-certificate</v-icon>
            Brevet de Technicien Supérieur (BTS)
          </v-card-title>
          <v-card-text>
            Une formation courte et professionnalisante en 2 ans. L'accès aux écoles d'ingénieurs est possible pour les excellents dossiers, souvent en passant par une classe préparatoire ATS (Adaptation Technicien Supérieur) d'un an.
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import EducationSchema from '@/components/EducationSchema.vue';
</script>
