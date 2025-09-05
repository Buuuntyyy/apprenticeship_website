<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-sheet rounded="lg" class="pa-6 pa-md-8" elevation="2" v-if="offer">
          <v-btn variant="text" to="/alternance/offres" class="mb-4">
            <v-icon start>mdi-arrow-left</v-icon>
            Retour aux offres
          </v-btn>
          <h1 class="text-h4">{{ offer.title }}</h1>
          <div class="d-flex align-center my-2">
            <v-chip color="primary" class="mr-2">{{ offer.contractType }}</v-chip>
            <v-icon start>mdi-map-marker-outline</v-icon>
            <span>{{ offer.location }}</span>
          </div>
          <v-divider class="my-4"></v-divider>
          <h2 class="text-h6">Description de l'entreprise</h2>
          <p class="body-2">{{ offer.companyDescription }}</p>
          <h2 class="text-h6 mt-4">Missions</h2>
          <p class="body-2">{{ offer.missions }}</p>
          <h2 class="text-h6 mt-4">Profil recherché</h2>
          <p class="body-2">{{ offer.profile }}</p>
        </v-sheet>
        <v-alert v-else type="warning" class="mt-4">
          L'offre que vous recherchez n'a pas été trouvée.
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
  contractType: string;
  companyDescription: string;
  missions: string;
  profile: string;
  field: string;
}

const route = useRoute();
const offer = ref<Offer | null>(null);

// Mock data, in a real app this would be an API call
const allOffers: Offer[] = [
  { id: 1, title: 'Développeur Web Full-Stack', company: 'SuperCorp', location: 'Toulouse', contractType: 'Apprentissage', companyDescription: 'SuperCorp est un leader de la transformation digitale.', missions: 'Développement front-end et back-end sur des projets clients.', profile: 'Bac+2/3 en informatique, passionné par le web.', field: 'Informatique' },
  { id: 2, title: 'Ingénieur Logiciel Embarqué', company: 'RoboTech', location: 'Blagnac', contractType: 'Apprentissage', companyDescription: 'RoboTech conçoit des robots pour l\'industrie aérospatiale.', missions: 'Programmation en C/C++ sur des systèmes temps réel.', profile: 'Bac+3 en systèmes embarqués ou équivalent.', field: 'Aéronautique' },
  { id: 3, title: 'Data Scientist', company: 'DataAnalytics', location: 'Labège', contractType: 'Apprentissage', companyDescription: 'Nous aidons nos clients à valoriser leurs données.', missions: 'Création de modèles de machine learning, analyse de données.', profile: 'Master en statistiques ou informatique décisionnelle.', field: 'Informatique' },
  { id: 4, title: 'Ingénieur Cybersécurité', company: 'SecureNet', location: 'Toulouse', contractType: 'Apprentissage', companyDescription: 'SecureNet est un pure-player de la cybersécurité.', missions: 'Tests d\'intrusion, analyse de vulnérabilités, veille.', profile: 'Bac+3/4 en réseaux ou sécurité informatique.', field: 'Informatique' },
  { id: 5, title: 'Chef de Projet IT', company: 'Innovatech', location: 'Ramonville', contractType: 'Apprentissage', companyDescription: 'Innovatech est une ESN à taille humaine.', missions: 'Pilotage de projets, gestion des plannings et des budgets.', profile: 'Master en gestion de projet, bon relationnel.', field: 'Généraliste' },
  { id: 6, title: 'Développeur Mobile (iOS/Android)', company: 'AppFactory', location: 'Toulouse', contractType: 'Apprentissage', companyDescription: 'Nous créons des applications mobiles sur mesure.', missions: 'Développement natif sur iOS (Swift) et Android (Kotlin).', profile: 'Bac+3 minimum avec une première expérience en mobile.', field: 'Informatique' },
];

onMounted(() => {
  const offerId = parseInt(route.params.id as string);
  offer.value = allOffers.find(o => o.id === offerId) || null;
});
</script>
