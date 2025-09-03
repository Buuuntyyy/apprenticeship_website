<template>
  <v-container>
    <h1 class="my-4 text-center">Offres d'alternance</h1>
    <v-row>
      <v-col v-for="offer in offers" :key="offer.id" cols="12" sm="6" md="4">
        <OfferCard :offer="offer" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OfferCard from '@/components/OfferCard.vue';

interface Offer {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

const offers = ref<Offer[]>([
  { id: 1, title: 'Développeur Web Full-Stack', company: 'SuperCorp', location: 'Toulouse', description: 'Rejoignez notre équipe pour développer des applications web innovantes avec les dernières technologies.' },
  { id: 2, title: 'Ingénieur Logiciel Embarqué', company: 'RoboTech', location: 'Blagnac', description: 'Participez à la conception et au développement de logiciels pour nos systèmes robotiques autonomes.' },
  { id: 3, title: 'Data Scientist', company: 'DataAnalytics', location: 'Labège', description: 'Analysez des ensembles de données complexes pour en extraire des informations précieuses et aider à la prise de décision.' },
  { id: 4, title: 'Ingénieur Cybersécurité', company: 'SecureNet', location: 'Toulouse', description: 'Protégez nos infrastructures et données contre les menaces et les cyberattaques.' },
  { id: 5, title: 'Chef de Projet IT', company: 'Innovatech', location: 'Ramonville', description: 'Gérez des projets informatiques de A à Z, de la conception au déploiement.' },
  { id: 6, title: 'Développeur Mobile (iOS/Android)', company: 'AppFactory', location: 'Toulouse', description: 'Créez des applications mobiles performantes et intuitives pour nos clients.' },
]);
</script>
