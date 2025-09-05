<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-sheet rounded="lg" class="pa-6 pa-md-8" elevation="2">
          <h1 class="text-h3 text-center mb-4">Le Bachelor Universitaire de Technologie (BUT)</h1>
          <p class="text-body-1 text-center mb-10">
            Le BUT est une formation universitaire en 3 ans qui allie théorie et pratique, avec une forte dimension professionnelle, préparant aussi bien à l'emploi qu'à la poursuite d'études.
          </p>

          <ButOverview :overview-items="overviewItems" />
          <ButKeyFigures :figures="keyFigures" />
          <ButAdmissionToEngineering :admission-steps="admissionSteps" />
          <ButSpecializations :specializations="specializationsByDomain" />
          <ButFaq :faq="faq" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButOverview from '@/components/but/ButOverview.vue';
import ButKeyFigures from '@/components/but/ButKeyFigures.vue';
import ButAdmissionToEngineering from '@/components/but/ButAdmissionToEngineering.vue';
import ButSpecializations from '@/components/but/ButSpecializations.vue';
import ButFaq from '@/components/but/ButFaq.vue';

const overviewItems = ref([
  { title: 'Formation en 3 ans', icon: 'mdi-calendar-check', text: 'Le BUT est un diplôme de grade Licence (Bac+3), structuré en 6 semestres.' },
  { title: 'Approche par Compétences', icon: 'mdi-lightbulb-on-outline', text: 'L\'enseignement est axé sur des situations professionnelles concrètes pour développer des compétences recherchées.' },
  { title: 'Professionnalisation', icon: 'mdi-briefcase-outline', text: 'Le cursus inclut 22 à 26 semaines de stage et la possibilité de suivre la formation en alternance, souvent dès la 2ème année.' },
]);

const keyFigures = ref([
  { title: 'Poursuite d\'études', value: '> 50%', caption: 'des diplômés poursuivent leurs études, majoritairement en école d\'ingénieurs.', color: 'primary' },
  { title: 'Insertion Pro', value: '90%', caption: 'des diplômés qui cherchent un emploi le trouvent en moins de 6 mois.', color: 'success' },
  { title: 'Taux de réussite', value: '~70%', caption: 'en 3 ans pour les bacheliers technologiques, la voie privilégiée.', color: 'info' },
]);

const admissionSteps = ref([
  { title: 'Excellence du Dossier', icon: 'mdi-school-outline', text: 'Les notes obtenues durant les 3 années de BUT sont le critère principal. Un bon classement dans sa promotion est essentiel.' },
  { title: 'Projet de Formation', icon: 'mdi-file-document-edit-outline', text: 'La lettre de motivation et le projet professionnel sont étudiés pour évaluer la cohérence de la candidature.' },
  { title: 'Entretien de Motivation', icon: 'mdi-account-group-outline', text: 'Certaines écoles organisent des entretiens pour évaluer la personnalité, la motivation et les connaissances du candidat.' },
  { title: 'Passerelles dédiées', icon: 'mdi-bridge', text: 'De nombreuses écoles proposent des places réservées aux meilleurs étudiants de BUT via des concours ou des admissions sur titre spécifiques.' },
]);

const specializationsByDomain = ref([
  {
    name: 'Informatique et Numérique',
    icon: 'mdi-laptop',
    color: 'blue',
    buts: [
      { name: 'BUT Informatique', description: 'Développement d\'applications, gestion de bases de données, administration systèmes et réseaux.', iuts: [
        { name: 'IUT de Toulouse', url: 'https://www.iut-tlse3.fr/' },
        { name: 'IUT de Blagnac', url: 'https://www.iut-blagnac.fr/' },
        { name: 'IUT de Castres', url: 'https://www.iut-castres.fr/' }
      ]},
      { name: 'BUT GEII', description: 'Génie Électrique et Informatique Industrielle. Électronique, automatisme, et systèmes embarqués.', iuts: [
        { name: 'IUT de Toulouse', url: 'https://www.iut-tlse3.fr/geii-toulouse' },
        { name: 'IUT de Tarbes', url: 'https://www.iut-tarbes.fr/geii/' },
        { name: 'IUT de Figeac', url: 'https://iut-figeac.univ-tlse2.fr/accueil/formations/bachelor-universitaire-de-technologie-but/geii' }
      ]},
      { name: 'BUT R&T', description: 'Réseaux et Télécommunications. Administration des réseaux, sécurité, et services de communication.', iuts: [
        { name: 'IUT de Blagnac', url: 'https://www.iut-blagnac.fr/formations/but-reseaux-telecommunications' },
        { name: 'IUT de Mont-de-Marsan', url: 'https://iutmdm.univ-pau.fr/fr/formations/but-rt.html' },
        { name: 'Et 27 autres IUT', url: 'https://www.iut-rt.net/'}
      ]},
    ],
  },
  {
    name: 'Aéronautique et Systèmes Complexes',
    icon: 'mdi-airplane',
    color: 'purple',
    buts: [
      { name: 'BUT GMP', description: 'Génie Mécanique et Productique. Conception, fabrication et gestion de systèmes mécaniques.', iuts: [
        { name: 'IUT de Toulouse', url: 'https://www.iut-tlse3.fr/gmp-toulouse' },
        { name: 'IUT de Tarbes', url: 'https://www.iut-tarbes.fr/gmp/' }
      ]},
      { name: 'BUT Mesures Physiques', description: 'Instrumentation, métrologie et contrôle qualité pour les systèmes complexes.', iuts: [
        { name: 'IUT de Toulouse', url: 'https://www.iut-tlse3.fr/mp-toulouse' },
        { name: 'IUT de Castres', url: 'https://www.iut-castres.fr/formations/but-mesures-physiques' }
      ]},
    ],
  },
  {
    name: 'Énergie, Environnement et Matériaux',
    icon: 'mdi-leaf',
    color: 'green',
    buts: [
      { name: 'BUT SGM', description: 'Science et Génie des Matériaux. Étude, caractérisation et mise en œuvre des matériaux.', iuts: [
        { name: 'IUT de Tarbes', url: 'https://www.iut-tarbes.fr/sgm/' },
        { name: 'IUT de Nîmes', url: 'https://www.iut-nimes.fr/but-sgm/' }
      ]},
      { name: 'BUT Génie Chimique - Génie des Procédés', description: 'Transformation de la matière et de l\'énergie, conception de procédés industriels.', iuts: [
        { name: 'IUT de Toulouse', url: 'https://www.iut-tlse3.fr/gcgp-toulouse' },
        { name: 'IUT de Pau', url: 'https://iutpa.univ-pau.fr/fr/formations/but-gc-gp.html' }
      ]},
    ],
  },
]);

const faq = ref([
  { question: 'Quelle est la différence entre un BUT et un BTS ?', answer: 'Le BUT est un diplôme universitaire (Bac+3) plus théorique et polyvalent, tandis que le BTS est une formation plus courte (Bac+2) et très spécialisée sur un métier précis. Le BUT prépare mieux à la poursuite d\'études.' },
  { question: 'Est-il difficile d\'intégrer une école d\'ingénieurs après un BUT ?', answer: 'L\'admission est sélective et réservée aux meilleurs étudiants. Il faut généralement figurer dans le premier quart de sa promotion pour avoir de bonnes chances. La régularité et l\'implication dans les projets sont clés.' },
  { question: 'Alternance ou formation initiale en BUT ?', answer: 'L\'alternance offre une expérience professionnelle solide et une rémunération, mais demande une grande autonomie. La formation initiale permet de se consacrer pleinement aux études et d\'avoir plus de temps pour les projets et la vie étudiante.' },
  { question: 'Quelles spécialités de BUT privilégier pour devenir ingénieur ?', answer: 'Les spécialités scientifiques et industrielles sont les plus directes : Mesures Physiques (MP), Génie Électrique et Informatique Industrielle (GEII), Génie Mécanique et Productique (GMP), ou encore Informatique.' },
]);
</script>
