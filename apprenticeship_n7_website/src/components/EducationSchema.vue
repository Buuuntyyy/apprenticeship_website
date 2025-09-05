<template>
  <v-container class="my-6 text-center">
    <img 
      src="@/assets/images/BACCALAUREAT.svg" 
      alt="Schéma des parcours d'études en ingénierie"
      class="schema-image"
    />
    <p class="text-caption text-center mt-2">
      Note: Les admissions après BUT2 ou BUT3 se font principalement sur dossier. <br> 
      Quelques épreuves peuvent avoir lieux selon les écoles (test de mathématiques, d'anglais et un oral) <br>
      Pas toutes les écoles sont atteignables par cette voie (X, ENS, Centrale...)
    </p>
  </v-container>
</template>

<script setup lang="ts">
// Ce composant affiche maintenant une image SVG importée.
</script>

<style scoped>
.schema-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
