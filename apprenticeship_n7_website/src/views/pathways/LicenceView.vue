<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-sheet rounded="lg" class="pa-6 pa-md-8" elevation="2">
          <h1 class="text-h3 text-center mb-4">La Licence Universitaire</h1>
          <p class="text-body-1 text-center mb-10">
            Un parcours universitaire classique qui, avec un bon dossier, peut ouvrir les portes des écoles d'ingénieurs via les admissions parallèles.
          </p>

          <!-- Contenu de la page Licence ici -->
          <v-alert
            type="info"
            variant="tonal"
            icon="mdi-information-outline"
            class="mb-6"
          >
            La Licence est une formation théorique et académique. Pour intégrer une école d'ingénieurs, il est crucial de choisir une mention scientifique (Maths, Physique, Info, etc.) et de viser d'excellents résultats.
          </v-alert>

          <v-list lines="two" variant="tonal">
            <v-list-item
              prepend-icon="mdi-numeric-2-box-outline"
              title="Admission après une L2"
              subtitle="Certaines écoles proposent des admissions directement après la deuxième année de Licence. La sélection est très exigeante."
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-numeric-3-box-outline"
              title="Admission après une L3"
              subtitle="C'est la voie la plus courante. Avoir validé sa Licence complète permet de postuler à un plus grand nombre d'écoles."
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-file-document-outline"
              title="Processus de sélection"
              subtitle="L'admission se fait quasi-exclusivement sur dossier (notes, classements, appréciations) suivi d'un entretien de motivation."
            ></v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>
