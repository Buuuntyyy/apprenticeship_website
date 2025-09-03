<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h3 my-4 text-center">Admissions à Bac +2</h1>
        <p class="text-body-1 mb-6 text-center">
          Après un premier diplôme (Prépa, BUT, Licence), plusieurs voies d'accès vous permettent d'intégrer une école d'ingénieur. Explorez les différentes options ci-dessous.
        </p>
        <v-row>
          <v-col cols="12" md="4">
            <v-card hover class="text-center" to="/admission/post-prepa">
              <v-card-title>Post-Prépa</v-card-title>
              <v-card-text>Intégrez via les concours après une Classe Préparatoire aux Grandes Écoles (CPGE).</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card hover class="text-center" to="/admission/post-but">
              <v-card-title>Post-BUT</v-card-title>
              <v-card-text>Rejoignez une école sur dossier après un Bachelor Universitaire de Technologie.</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card hover class="text-center" to="/admission/post-licence">
              <v-card-title>Post-Licence</v-card-title>
              <v-card-text>Accédez aux admissions parallèles après avoir validé une Licence scientifique.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>
