<template>
  <v-container>
    <h1 class="text-h4 my-4 text-center">Grandes Écoles d'Ingénieurs Françaises</h1>
    <p class="text-body-1 mb-6 text-center">
      Découvrez une sélection d'écoles d'ingénieurs publiques parmi les plus réputées, classées par grands domaines de spécialisation.
    </p>

    <v-expansion-panels variant="inset">
      <v-expansion-panel
        v-for="domain in domains"
        :key="domain.title"
      >
        <v-expansion-panel-title>
          <v-icon start :icon="domain.icon"></v-icon>
          {{ domain.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list lines="two">
            <v-list-item
              v-for="school in domain.schools"
              :key="school.name"
              :href="school.url"
              target="_blank"
              rel="noopener"
              :title="school.name"
              :subtitle="school.description"
            >
              <template v-slot:append>
                <v-btn variant="text" icon="mdi-open-in-new" size="small"></v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const domains = ref([
  {
    title: 'Écoles Généralistes',
    icon: 'mdi-atom',
    schools: [
      { name: 'École Polytechnique (X)', description: 'Formation scientifique et humaine de très haut niveau, menant à des carrières variées.', url: 'https://www.polytechnique.edu/' },
      { name: 'CentraleSupélec', description: 'Fusion de Centrale Paris et Supélec, leader dans les sciences de l\'ingénieur et des systèmes.', url: 'https://www.centralesupelec.fr/' },
      { name: 'Mines Paris - PSL', description: 'Forme des ingénieurs de premier plan pour l\'industrie, la recherche et l\'entrepreneuriat.', url: 'https://www.minesparis.psl.eu/' },
      { name: 'École des Ponts ParisTech', description: 'Historiquement axée sur le génie civil, aujourd\'hui une grande école généraliste.', url: 'https://www.ecoledesponts.fr/' },
      { name: 'Arts et Métiers', description: 'Spécialiste du génie mécanique, industriel et énergétique.', url: 'https://artsetmetiers.fr/' },
      { name: 'INSA Lyon', description: 'Institut National des Sciences Appliquées, modèle de formation d\'ingénieur en 5 ans.', url: 'https://www.insa-lyon.fr/' },
      { name: 'ENSTA Paris', description: 'École de l\'Institut Polytechnique de Paris, spécialisée en transports, énergie et systèmes complexes.', url: 'https://www.ensta-paris.fr/' },
      { name: 'IMT Atlantique', description: 'Grande école d\'ingénieurs généraliste dans le numérique, l\'énergie et l\'environnement.', url: 'https://www.imt-atlantique.fr/' },
      { name: 'Centrale Lyon', description: 'Forme des ingénieurs généralistes ouverts sur le monde et capables de s\'adapter.', url: 'https://www.ec-lyon.fr/' },
      { name: 'Centrale Nantes', description: 'Reconnue pour son expertise en mécanique, génie civil, et systèmes de contrôle.', url: 'https://www.ec-nantes.fr/' },
    ],
  },
  {
    title: 'Informatique & Numérique',
    icon: 'mdi-laptop',
    schools: [
      { name: 'Télécom Paris', description: 'Grande école du numérique, au cœur de l\'Institut Polytechnique de Paris.', url: 'https://www.telecom-paris.fr/' },
      { name: 'Grenoble INP - Ensimag', description: 'Référence en informatique, mathématiques appliquées et télécommunications.', url: 'https://ensimag.grenoble-inp.fr/' },
      { name: 'ENSEEIHT', description: 'Toulouse - Numérique, Électronique, Hydraulique, Télécommunications.', url: 'https://www.enseeiht.fr' },
      { name: 'INSA Lyon', description: 'Département Informatique réputé pour sa formation complète.', url: 'https://www.insa-lyon.fr/fr/formation/informatique' },
      { name: 'Université de Technologie de Compiègne (UTC)', description: 'Pionnière dans la formation d\'ingénieurs en informatique.', url: 'https://www.utc.fr/' },
      { name: 'IMT Atlantique', description: 'Spécialisations en cybersécurité, cloud, et intelligence artificielle.', url: 'https://www.imt-atlantique.fr/' },
      { name: 'Télécom SudParis', description: 'Forme des ingénieurs dans tous les domaines du numérique.', url: 'https://www.telecom-sudparis.eu/' },
      { name: 'ENSIIE', description: 'École Nationale Supérieure d\'Informatique pour l\'Industrie et l\'Entreprise.', url: 'https://www.ensiie.fr/' },
      { name: 'Université de Technologie de Troyes (UTT)', description: 'Systèmes d\'Information et Télécommunications.', url: 'https://www.utt.fr/' },
      { name: 'Polytech Nice Sophia', description: 'Au cœur de la technopole de Sophia Antipolis.', url: 'https://polytech.univ-cotedazur.fr/' },
    ],
  },
  {
    title: 'Aéronautique & Spatial',
    icon: 'mdi-rocket-launch',
    schools: [
      { name: 'ISAE-SUPAERO', description: 'Leader mondial de la formation supérieure dans le domaine de l\'ingénierie aérospatiale.', url: 'https://www.isae-supaero.fr' },
      { name: 'ESTACA', description: 'Spécialisée dans les transports : aéronautique, automobile, spatial et ferroviaire.', url: 'https://www.estaca.fr/' },
      { name: 'ENAC', description: 'École Nationale de l\'Aviation Civile, unique en Europe.', url: 'https://www.enac.fr/' },
      { name: 'ENSMA', description: 'École Nationale Supérieure de Mécanique et d\'Aérotechnique de Poitiers.', url: 'https://www.ensma.fr/' },
      { name: 'École de l\'Air et de l\'Espace', description: 'Forme les officiers de l\'Armée de l\'Air et de l\'Espace.', url: 'https://ecole-air-espace.fr/' },
      { name: 'Centrale Lyon', description: 'Option "Aéronautique" reconnue en partenariat avec l\'industrie.', url: 'https://www.ec-lyon.fr/' },
      { name: 'Arts et Métiers', description: 'Expertise en conception et production pour l\'aéronautique.', url: 'https://artsetmetiers.fr/' },
      { name: 'IMT Mines Albi', description: 'Matériaux et procédés pour l\'aéronautique et le spatial.', url: 'https://www.imt-mines-albi.fr/' },
      { name: 'Polytech Orléans', description: 'Spécialités en mécanique et énergétique pour l\'aéronautique.', url: 'https://www.univ-orleans.fr/polytech' },
      { name: 'SeaTech', description: 'Matériaux pour l\'aéronautique et le naval.', url: 'https://www.seatech.fr' },
    ],
  },
  {
    title: 'Physique, Chimie & Matériaux',
    icon: 'mdi-flask-outline',
    schools: [
      { name: 'ESPCI Paris - PSL', description: 'École d\'excellence en physique, chimie et biologie.', url: 'https://www.espci.psl.eu/' },
      { name: 'Institut d\'Optique Graduate School', description: 'La grande école de l\'optique, de la photonique et de la lumière.', url: 'https://www.institutoptique.fr/' },
      { name: 'Chimie ParisTech - PSL', description: 'Forme des ingénieurs chimistes de haut niveau.', url: 'https://www.chimieparistech.psl.eu/' },
      { name: 'Grenoble INP - Phelma', description: 'Physique, Électronique, Matériaux.', url: 'https://phelma.grenoble-inp.fr/' },
      { name: 'ENSCP Bordeaux', description: 'École Nationale Supérieure de Chimie, de Biologie et de Physique.', url: 'https://www.enscbp.fr/' },
      { name: 'ECPM', description: 'École européenne de Chimie, Polymères et Matériaux de Strasbourg.', url: 'https://ecpm.unistra.fr/' },
      { name: 'SIGMA Clermont', description: 'Chimie, génie mécanique et génie industriel.', url: 'https://www.sigma-clermont.fr/' },
      { name: 'ENSIACET (A7)', description: 'Toulouse - Chimie, Matériaux, Génie des Procédés, Génie Industriel.', url: 'https://www.ensiacet.fr/' },
      { name: 'ESCOM Chimie', description: 'Spécialisée en chimie organique, minérale et industrielle.', url: 'https://www.escom.fr/' },
      { name: 'ITECH Lyon', description: 'Institut Textile et Chimique de Lyon.', url: 'https://www.itech.fr/' },
    ],
  },
  {
    title: 'Agronomie, Agroalimentaire & Vivant',
    icon: 'mdi-leaf',
    schools: [
      { name: 'AgroParisTech', description: 'Leader dans les sciences du vivant, de l\'environnement, et de l\'agronomie.', url: 'https://www.agroparistech.fr/' },
      { name: 'Institut Agro Montpellier', description: 'Formations d\'ingénieur pour l\'agriculture, l\'alimentation et l\'environnement.', url: 'https://www.institut-agro-montpellier.fr/' },
      { name: 'Institut Agro Rennes-Angers', description: 'Spécialisé en agronomie, agroalimentaire, horticulture et paysage.', url: 'https://www.institut-agro-rennes-angers.fr/' },
      { name: 'Oniris', description: 'Nantes - École Nationale Vétérinaire, Agroalimentaire et de l\'Alimentation.', url: 'https://www.oniris-nantes.fr/' },
      { name: 'VetAgro Sup', description: 'Lyon - Santé et alimentation animales, agronomie et environnement.', url: 'https://www.vetagro-sup.fr/' },
      { name: 'Bordeaux Sciences Agro', description: 'École nationale supérieure des sciences agronomiques de Bordeaux Aquitaine.', url: 'https://www.bordeaux-agro.fr/' },
      { name: 'ENSAT', description: 'Toulouse - École Nationale Supérieure Agronomique de Toulouse.', url: 'https://www.ensat.fr/' },
      { name: 'ENSAIA', description: 'Nancy - Agronomie, Industries Alimentaires et Environnement.', url: 'https://ensaia.univ-lorraine.fr/' },
      { name: 'UniLaSalle', description: 'Sciences de la Terre, du Vivant et de l\'Environnement.', url: 'https://www.unilasalle.fr/' },
      { name: 'Agrocampus Ouest', description: 'Fusionné dans l\'Institut Agro Rennes-Angers, reste une référence.', url: 'https://www.agrocampus-ouest.fr/' },
    ],
  },
]);
</script>
