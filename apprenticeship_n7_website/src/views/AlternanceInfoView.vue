<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h3 my-4 text-center">L'Alternance en École d'Ingénieur</h1>
        <p class="text-body-1 mb-4">
          L'alternance est un système de formation qui combine théorie en école et pratique en entreprise. C'est une excellente opportunité d'acquérir une expérience professionnelle significative tout en poursuivant vos études, d'être rémunéré et de faciliter votre insertion professionnelle.
        </p>
        <v-img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1500&q=80"
          class="my-6 rounded-lg"
          max-height="400px"
          cover
        ></v-img>
        <div class="text-center">
          <v-btn color="primary" large @click="$router.push('/alternance/offres')">
            Voir les offres disponibles
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>
