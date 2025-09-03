<template>
  <v-container fluid class="fill-height pa-0 home-bg">
    <v-row align="center" justify="center" class="text-center">
      <v-col cols="12">
        <AnimatedLogo :size="150" style="color: white; margin-bottom: 2rem;" />
        <h1 class="display-2 font-weight-bold mb-4 text-white">
          Trouvez votre voie en école d'ingénieur
        </h1>
        <p class="subtitle-1 mb-10 text-white">
          La plateforme pour vous guider dans le monde des études d'ingénierie et de l'alternance.
        </p>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn class="choice-btn" large color="secondary" @click="$router.push('/post-bac')">
          <v-icon left>mdi-school</v-icon>
          Études Post-Bac
        </v-btn>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn class="choice-btn" large color="secondary" @click="$router.push('/bac-plus-2')">
          <v-icon left>mdi-account-school</v-icon>
          Admissions à Bac +2
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import AnimatedLogo from '@/components/AnimatedLogo.vue';
</script>

<style scoped>
.home-bg {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
  min-height: calc(100vh - 64px);
}

.text-white {
  color: #fff !important;
}

.choice-btn {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.choice-btn:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0px 15px 25px -5px rgba(0, 0, 0, 0.4);
}
</style>