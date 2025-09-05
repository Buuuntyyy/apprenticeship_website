<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-sheet rounded="lg" class="pa-6 pa-md-8" elevation="2">
          <h1 class="text-h3 text-center mb-4">Offres d'Alternance</h1>
          <p class="text-body-1 text-center mb-8">
            Trouvez l'entreprise qui vous accueillera pour votre formation d'ingénieur en apprentissage.
          </p>
          <v-row>
            <v-col
              v-for="offer in offers"
              :key="offer.id"
              cols="12"
              md="6"
            >
              <v-card
                class="fill-height"
                hover
                :to="`/offer/${offer.id}`"
              >
                <v-card-title>{{ offer.title }}</v-card-title>
                <v-card-subtitle>{{ offer.company }} - {{ offer.location }}</v-card-subtitle>
                <v-card-text>
                  <v-chip small color="primary" class="mr-2">{{ offer.contractType }}</v-chip>
                  <v-chip small>{{ offer.field }}</v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Offer {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  contractType: string;
  field: string;
}

const offers = ref<Offer[]>([
  { id: 1, title: 'Développeur Web Full-Stack', company: 'SuperCorp', location: 'Toulouse', description: 'Rejoignez notre équipe pour développer des applications web innovantes avec les dernières technologies.', contractType: 'Alternance', field: 'Informatique' },
  { id: 2, title: 'Ingénieur Logiciel Embarqué', company: 'RoboTech', location: 'Blagnac', description: 'Participez à la conception et au développement de logiciels pour nos systèmes robotiques autonomes.', contractType: 'Apprentissage', field: 'Informatique' },
  { id: 3, title: 'Data Scientist', company: 'DataAnalytics', location: 'Labège', description: 'Analysez des ensembles de données complexes pour en extraire des informations précieuses et aider à la prise de décision.', contractType: 'Alternance', field: 'Données' },
  { id: 4, title: 'Ingénieur Cybersécurité', company: 'SecureNet', location: 'Toulouse', description: 'Protégez nos infrastructures et données contre les menaces et les cyberattaques.', contractType: 'Apprentissage', field: 'Sécurité' },
  { id: 5, title: 'Chef de Projet IT', company: 'Innovatech', location: 'Ramonville', description: 'Gérez des projets informatiques de A à Z, de la conception au déploiement.', contractType: 'Alternance', field: 'Management' },
  { id: 6, title: 'Développeur Mobile (iOS/Android)', company: 'AppFactory', location: 'Toulouse', description: 'Créez des applications mobiles performantes et intuitives pour nos clients.', contractType: 'Apprentissage', field: 'Informatique' },
]);
</script>
