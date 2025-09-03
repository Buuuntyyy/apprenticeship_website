<template>
  <v-container fluid class="fill-height pa-0 home-bg">
    <v-row align="center" justify="center" class="text-center">
      <v-col cols="12" md="8">
        <h1 class="display-2 font-weight-bold mb-4 text-white">
          Trouvez votre alternance à l'ENSEEIHT
        </h1>
        <p class="subtitle-1 mb-6 text-white">
          Plateforme moderne pour faciliter la recherche d'alternance en école d'ingénieur à l'N7.
        </p>
        <v-btn color="secondary" large @click="$router.push('/alternance')">
          Découvrir les offres
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// rien pour l’instant
</script>

<style scoped>
.home-bg {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
  min-height: calc(100vh - 64px); /* Adjust for app bar height */
}

.text-white {
  color: #fff !important;
}
</style>