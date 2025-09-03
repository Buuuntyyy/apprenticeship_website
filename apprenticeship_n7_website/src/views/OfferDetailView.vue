<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card v-if="offer">
          <v-card-title class="headline">{{ offer.title }}</v-card-title>
          <v-card-subtitle>{{ offer.company }} - {{ offer.location }}</v-card-subtitle>
          <v-divider class="my-4"></v-divider>
          <v-card-text>
            <p>{{ offer.description }}</p>
            <p><strong>Missions :</strong></p>
            <ul>
              <li>Développement de nouvelles fonctionnalités</li>
              <li>Maintenance et amélioration de l'existant</li>
              <li>Participation aux phases de test et de recette</li>
            </ul>
            <p class="mt-4"><strong>Profil recherché :</strong></p>
            <ul>
              <li>Étudiant en école d'ingénieur (Bac+4/5)</li>
              <li>Connaissances en JavaScript, Vue.js, et Node.js</li>
              <li>Autonome, proactif et bon communicant</li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" large>Postuler</v-btn>
          </v-card-actions>
        </v-card>
        <v-alert v-else type="error">
          L'offre demandée n'a pas été trouvée.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Offer {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

const route = useRoute();
const offer = ref<Offer | null>(null);

// Mock data, in a real app this would be an API call
const allOffers: Offer[] = [
  { id: 1, title: 'Développeur Web Full-Stack', company: 'SuperCorp', location: 'Toulouse', description: 'Rejoignez notre équipe pour développer des applications web innovantes avec les dernières technologies.' },
  { id: 2, title: 'Ingénieur Logiciel Embarqué', company: 'RoboTech', location: 'Blagnac', description: 'Participez à la conception et au développement de logiciels pour nos systèmes robotiques autonomes.' },
  { id: 3, 'title': 'Data Scientist', company: 'DataAnalytics', location: 'Labège', description: 'Analysez des ensembles de données complexes pour en extraire des informations précieuses et aider à la prise de décision.' },
  { id: 4, title: 'Ingénieur Cybersécurité', company: 'SecureNet', location: 'Toulouse', description: 'Protégez nos infrastructures et données contre les menaces et les cyberattaques.' },
  { id: 5, title: 'Chef de Projet IT', company: 'Innovatech', location: 'Ramonville', description: 'Gérez des projets informatiques de A à Z, de la conception au déploiement.' },
  { id: 6, title: 'Développeur Mobile (iOS/Android)', company: 'AppFactory', location: 'Toulouse', description: 'Créez des applications mobiles performantes et intuitives pour nos clients.' },
];

onMounted(() => {
  const offerId = parseInt(route.params.id as string);
  offer.value = allOffers.find(o => o.id === offerId) || null;
});
</script>
