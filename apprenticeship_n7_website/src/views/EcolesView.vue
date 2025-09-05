<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-sheet rounded="lg" class="pa-6 pa-md-8" elevation="2">
          <h1 class="text-h3 text-center mb-4">Trouver son École d'Ingénieur</h1>
          <p class="text-body-1 text-center mb-10">
            Explorez les écoles par domaine de spécialisation. Chaque domaine regroupe des écoles reconnues pour leur expertise et leurs débouchés.
          </p>

          <v-expansion-panels variant="popout" class="mb-6">
            <v-expansion-panel
              v-for="domain in domains"
              :key="domain.name"
            >
              <v-expansion-panel-title class="text-h6">
                <v-icon :color="domain.color" start>{{ domain.icon }}</v-icon>
                {{ domain.name }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p class="mb-4">{{ domain.description }}</p>
                <v-chip
                  v-for="school in domain.schools"
                  :key="school.name"
                  class="ma-1"
                  label
                  link
                  :href="school.url"
                  target="_blank"
                  rel="noopener"
                >
                  {{ school.name }}
                </v-chip>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const domains = ref([
  {
    name: 'Écoles Généralistes',
    icon: 'mdi-atom',
    color: 'blue',
    description: 'Découvrez les écoles généralistes qui offrent une formation d\'ingénieur polyvalente et de haut niveau.',
    schools: [
      { name: 'École Polytechnique (X)', url: 'https://www.polytechnique.edu/' },
      { name: 'CentraleSupélec', url: 'https://www.centralesupelec.fr/' },
      { name: 'Mines Paris - PSL', url: 'https://www.minesparis.psl.eu/' },
      { name: 'École des Ponts ParisTech', url: 'https://www.ecoledesponts.fr/' },
      { name: 'Arts et Métiers', url: 'https://artsetmetiers.fr/' },
      { name: 'INSA Lyon', url: 'https://www.insa-lyon.fr/' },
      { name: 'ENSTA Paris', url: 'https://www.ensta-paris.fr/' },
      { name: 'IMT Atlantique', url: 'https://www.imt-atlantique.fr/' },
      { name: 'Centrale Lyon', url: 'https://www.ec-lyon.fr/' },
      { name: 'Centrale Nantes', url: 'https://www.ec-nantes.fr/' },
    ],
  },
  {
    name: 'Informatique & Numérique',
    icon: 'mdi-laptop',
    color: 'green',
    description: 'Plongez dans l\'univers des écoles spécialisées en informatique et numérique.',
    schools: [
      { name: 'Télécom Paris', url: 'https://www.telecom-paris.fr/' },
      { name: 'Grenoble INP - Ensimag', url: 'https://ensimag.grenoble-inp.fr/' },
      { name: 'ENSEEIHT', url: 'https://www.enseeiht.fr' },
      { name: 'INSA Lyon', url: 'https://www.insa-lyon.fr/fr/formation/informatique' },
      { name: 'Université de Technologie de Compiègne (UTC)', url: 'https://www.utc.fr/' },
      { name: 'IMT Atlantique', url: 'https://www.imt-atlantique.fr/' },
      { name: 'Télécom SudParis', url: 'https://www.telecom-sudparis.eu/' },
      { name: 'ENSIIE', url: 'https://www.ensiie.fr/' },
      { name: 'Université de Technologie de Troyes (UTT)', url: 'https://www.utt.fr/' },
      { name: 'Polytech Nice Sophia', url: 'https://polytech.univ-cotedazur.fr/' },
    ],
  },
  {
    name: 'Aéronautique & Spatial',
    icon: 'mdi-rocket-launch',
    color: 'red',
    description: 'Explorez les écoles d\'ingénieurs spécialisées dans l\'aéronautique et le spatial.',
    schools: [
      { name: 'ISAE-SUPAERO', url: 'https://www.isae-supaero.fr' },
      { name: 'ESTACA', url: 'https://www.estaca.fr/' },
      { name: 'ENAC', url: 'https://www.enac.fr/' },
      { name: 'ENSMA', url: 'https://www.ensma.fr/' },
      { name: 'École de l\'Air et de l\'Espace', url: 'https://ecole-air-espace.fr/' },
      { name: 'Centrale Lyon', url: 'https://www.ec-lyon.fr/' },
      { name: 'Arts et Métiers', url: 'https://artsetmetiers.fr/' },
      { name: 'IMT Mines Albi', url: 'https://www.imt-mines-albi.fr/' },
      { name: 'Polytech Orléans', url: 'https://www.univ-orleans.fr/polytech' },
      { name: 'SeaTech', url: 'https://www.seatech.fr' },
    ],
  },
  {
    name: 'Physique, Chimie & Matériaux',
    icon: 'mdi-flask-outline',
    color: 'purple',
    description: 'Découvrez les écoles d\'ingénieurs en physique, chimie et matériaux.',
    schools: [
      { name: 'ESPCI Paris - PSL', url: 'https://www.espci.psl.eu/' },
      { name: 'Institut d\'Optique Graduate School', url: 'https://www.institutoptique.fr/' },
      { name: 'Chimie ParisTech - PSL', url: 'https://www.chimieparistech.psl.eu/' },
      { name: 'Grenoble INP - Phelma', url: 'https://phelma.grenoble-inp.fr/' },
      { name: 'ENSCP Bordeaux', url: 'https://www.enscbp.fr/' },
      { name: 'ECPM', url: 'https://ecpm.unistra.fr/' },
      { name: 'SIGMA Clermont', url: 'https://www.sigma-clermont.fr/' },
      { name: 'ENSIACET (A7)', url: 'https://www.ensiacet.fr/' },
      { name: 'ESCOM Chimie', url: 'https://www.escom.fr/' },
      { name: 'ITECH Lyon', url: 'https://www.itech.fr/' },
    ],
  },
  {
    name: 'Agronomie, Agroalimentaire & Vivant',
    icon: 'mdi-leaf',
    color: 'orange',
    description: 'Formez-vous aux sciences du vivant, de l\'environnement, et de l\'agronomie.',
    schools: [
      { name: 'AgroParisTech', url: 'https://www.agroparistech.fr/' },
      { name: 'Institut Agro Montpellier', url: 'https://www.institut-agro-montpellier.fr/' },
      { name: 'Institut Agro Rennes-Angers', url: 'https://www.institut-agro-rennes-angers.fr/' },
      { name: 'Oniris', url: 'https://www.oniris-nantes.fr/' },
      { name: 'VetAgro Sup', url: 'https://www.vetagro-sup.fr/' },
      { name: 'Bordeaux Sciences Agro', url: 'https://www.bordeaux-agro.fr/' },
      { name: 'ENSAT', url: 'https://www.ensat.fr/' },
      { name: 'ENSAIA', url: 'https://ensaia.univ-lorraine.fr/' },
      { name: 'UniLaSalle', url: 'https://www.unilasalle.fr/' },
      { name: 'Agrocampus Ouest', url: 'https://www.agrocampus-ouest.fr/' },
    ],
  },
]);
</script>

<style scoped>
.v-expansion-panel-title {
  font-weight: 500;
}

.v-expansion-panel-text {
  padding-top: 0;
  padding-bottom: 0;
}

.v-chip {
  text-transform: none;
}
</style>
