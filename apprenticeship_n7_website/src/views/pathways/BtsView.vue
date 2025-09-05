<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-sheet rounded="lg" class="pa-6 pa-md-8" elevation="2">
          <h1 class="text-h3 text-center mb-4">Le Brevet de Technicien Supérieur (BTS)</h1>
          <p class="text-body-1 text-center mb-10">
            Une formation courte et professionnalisante qui peut, pour les meilleurs, être un tremplin vers une école d'ingénieurs.
          </p>

          <v-alert
            type="warning"
            variant="tonal"
            icon="mdi-alert-outline"
            class="mb-6"
          >
            <strong>Attention :</strong> La poursuite d'études en école d'ingénieurs après un BTS est la voie la plus difficile et la moins directe. Elle demande une motivation exceptionnelle et d'excellents résultats.
          </v-alert>

          <h2 class="text-h4 mt-8 mb-4">La Prépa ATS : La Voie Royale post-BTS</h2>
          <p class="mb-4">
            Pour maximiser ses chances, il est très fortement recommandé de passer par une <strong>Classe Préparatoire ATS (Adaptation Technicien Supérieur)</strong>. C'est une année de mise à niveau intensive spécialement conçue pour les titulaires de BTS (et certains BUT).
          </p>
          <v-card variant="outlined">
            <v-list-item
              prepend-icon="mdi-school"
              title="Prépa ATS (1 an)"
              subtitle="Remise à niveau en mathématiques et physique, et préparation intensive au Concours ATS, qui ouvre les portes de nombreuses écoles d'ingénieurs."
            ></v-list-item>
          </v-card>

          <h2 class="text-h4 mt-8 mb-4">Admission Directe (Très Rare)</h2>
          <p>
            Quelques écoles peuvent admettre des étudiants exceptionnels directement après le BTS, mais cela reste très marginal. Le dossier doit être excellent et le projet professionnel très bien défini.
          </p>

        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>
