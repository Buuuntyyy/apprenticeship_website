<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="text-h3 text-center mb-4">La Classe Préparatoire aux Grandes Écoles (CPGE)</h1>
        <p class="text-body-1 text-center mb-10">
          Souvent appelée "voie royale", la prépa est un cursus intensif de deux ans qui prépare aux concours d'entrée des plus grandes écoles d'ingénieurs.
        </p>

        <PrepaExpectations :items="whatToExpect" />
        <PrepaFilieres :filieres="filieres" />
        <PrepaConcours :concours-list="concoursList" />
        <PrepaTestimonials :testimonials="testimonials" />
        <PrepaFaq :faq="faq" />

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PrepaExpectations from '@/components/prepa/PrepaExpectations.vue';
import PrepaFilieres from '@/components/prepa/PrepaFilieres.vue';
import PrepaConcours from '@/components/prepa/PrepaConcours.vue';
import PrepaTestimonials from '@/components/prepa/PrepaTestimonials.vue';
import PrepaFaq from '@/components/prepa/PrepaFaq.vue';

const whatToExpect = ref([
  { title: 'Le Rythme de Travail', icon: 'mdi-clock-fast', text: 'Attendez-vous à un volume horaire élevé (environ 30h de cours par semaine), complété par un travail personnel quasi équivalent. La régularité est la clé.' },
  { title: 'Les Khôlles', icon: 'mdi-account-voice', text: 'Ce sont des interrogations orales hebdomadaires en petit groupe. Elles permettent de vérifier la compréhension du cours et d\'entraîner à l\'argumentation rapide.' },
  { title: 'Les Devoirs Sur Table (DS)', icon: 'mdi-pencil-ruler', text: 'Chaque semaine, un devoir de 3 ou 4 heures dans une matière majeure évalue vos connaissances et votre capacité à résoudre des problèmes complexes en temps limité.' },
  { title: 'Le TIPE', icon: 'mdi-flask-beaker', text: 'En 2ème année, les Travaux d\'Initiative Personnelle Encadrés sont un projet de recherche scientifique sur un thème donné. Il est présenté aux concours.' },
]);

const filieres = ref([
  {
    name: 'MPSI',
    icon: 'mdi-infinity',
    shortDesc: 'Maths, Physique, SI. Pour les passionnés de maths et de physique théorique.',
    showDetails: false,
    details: [
      'Accent mis sur l\'abstraction et le raisonnement formel.',
      'Idéal pour ceux qui visent les concours les plus prestigieux (X, ENS).',
      'Débouche en 2ème année sur les filières MP (dominante maths) ou PSI (dominante physique).'
    ],
    profile: 'Passionné d\'abstraction',
    subjects: 'Maths, Physique',
    outcomes: 'MP ou PSI'
  },
  {
    name: 'PCSI',
    icon: 'mdi-flask-outline',
    shortDesc: 'Physique, Chimie, SI. Pour les amateurs de sciences expérimentales.',
    showDetails: false,
    details: [
      'Équilibre entre théorie (physique) et pratique (chimie).',
      'Forte composante en travaux pratiques et manipulations.',
      'Débouche en 2ème année sur les filières PC (dominante chimie) ou PSI (dominante physique).'
    ],
    profile: 'Aime l\'expérimentation',
    subjects: 'Physique, Chimie',
    outcomes: 'PC ou PSI'
  },
  {
    name: 'PTSI',
    icon: 'mdi-cogs',
    shortDesc: 'Physique, Technologie, SI. Pour ceux qui aiment les systèmes concrets.',
    showDetails: false,
    details: [
      'Les Sciences de l\'Ingénieur (SI) y occupent une place centrale.',
      'Approche plus appliquée, étude de systèmes mécaniques et automatisés.',
      'La suite logique est la filière PT (Physique-Technologie) en deuxième année.'
    ],
    profile: 'Intérêt pour la technologie',
    subjects: 'SI, Physique',
    outcomes: 'PT'
  },
  {
    name: 'BCPST',
    icon: 'mdi-leaf',
    shortDesc: 'Biologie, Chimie, Physique, SVT. La voie d\'accès aux écoles d\'agro et véto.',
    showDetails: false,
    details: [
      'Destinée aux passionnés des sciences du vivant et de la Terre.',
      'Maintient un socle solide en physique-chimie et mathématiques.',
      'Prépare principalement à la banque de concours Agro-Véto et G2E.'
    ],
    profile: 'Passionné par le vivant',
    subjects: 'Biologie, Chimie, SVT',
    outcomes: 'BCPST'
  }
]);

const concoursList = ref([
  { name: 'Concours X-ENS', url: 'https://www.concours-ens.fr/', description: 'Le plus sélectif, ouvrant les portes de l\'École Polytechnique et des Écoles Normales Supérieures.', schools: [
    { name: 'École Polytechnique (X)', url: 'https://www.polytechnique.edu/' },
    { name: 'ENS Ulm', url: 'https://www.ens.psl.eu/' },
    { name: 'ENS Lyon', url: 'https://www.ens-lyon.fr/' },
    { name: 'ENS Paris-Saclay', url: 'https://ens-paris-saclay.fr/' }
  ]},
  { name: 'Concours Mines-Ponts', url: 'https://www.concoursminesponts.fr/', description: 'Regroupe des écoles de premier plan, très réputées dans l\'industrie.', schools: [
    { name: 'Mines Paris', url: 'https://www.minesparis.psl.eu/' },
    { name: 'Ponts ParisTech', url: 'https://www.ecoledesponts.fr/' },
    { name: 'ISAE-SUPAERO', url: 'https://www.isae-supaero.fr/' },
    { name: 'Télécom Paris', url: 'https://www.telecom-paris.fr/' },
    { name: 'ENSTA Paris', url: 'https://www.ensta-paris.fr/' }
  ]},
  { name: 'Concours Centrale-Supélec', url: 'https://www.concours-centrale-supelec.fr/', description: 'Permet d\'accéder aux écoles du groupe Centrale et à Supélec, formant des ingénieurs généralistes de haut niveau.', schools: [
    { name: 'CentraleSupélec', url: 'https://www.centralesupelec.fr/' },
    { name: 'Centrale Lyon', url: 'https://www.ec-lyon.fr/' },
    { name: 'Centrale Nantes', url: 'https://www.ec-nantes.fr/' },
    { name: 'Institut d\'Optique', url: 'https://www.institutoptique.fr/' }
  ]},
  { name: 'Concours Commun INP (CCINP)', url: 'https://www.concours-commun-inp.fr/', description: 'Le plus grand concours en nombre de places, donnant accès à plus de 60 écoles d\'ingénieurs publiques.', schools: [
    { name: 'ENSEEIHT', url: 'https://www.enseeiht.fr/' },
    { name: 'Grenoble INP - Phelma', url: 'https://phelma.grenoble-inp.fr/' },
    { name: 'ENSEA', url: 'https://www.ensea.fr/' },
    { name: '...et bien d\'autres', url: 'https://www.concours-commun-inp.fr//fr/les-ecoles.html' }
  ]},
  { name: 'Concours e3a-Polytech', url: 'https://www.e3a-polytech.fr/', description: 'Rassemble de nombreuses écoles d\'ingénieurs, dont le réseau Polytech et des écoles spécialisées.', schools: [
    { name: 'Réseau Polytech', url: 'https://www.polytech-reseau.org/' },
    { name: 'Arts et Métiers', url: 'https://artsetmetiers.fr/' },
    { name: 'ESTIA', url: 'https://www.estia.fr/' }
  ]},
  { name: 'Banque Agro-Véto', url: 'https://www.concours-agro-veto.net/', description: 'Dédié aux étudiants de la filière BCPST pour intégrer les écoles d\'agronomie, de chimie et vétérinaires.', schools: [
    { name: 'AgroParisTech', url: 'https://www.agroparistech.fr/' },
    { name: 'Oniris', url: 'https://www.oniris-nantes.fr/' },
    { name: 'VetAgro Sup', url: 'https://www.vetagro-sup.fr/' }
  ]},
  { name: 'Concours Avenir Prépas', url: 'https://www.concoursavenir.fr/avenir-prepas/', description: 'Porte d\'entrée pour un groupe d\'écoles d\'ingénieurs privées reconnues.', schools: [
    { name: 'ECE', url: 'https://www.ece.fr/' },
    { name: 'EIGSI', url: 'https://www.eigsi.fr/' },
    { name: 'EPF', url: 'https://www.epf.fr/' },
    { name: 'ESILV', url: 'https://www.esilv.fr/' }
  ]},
  { name: 'Concours Puissance Alpha CPGE', url: 'https://www.puissance-alpha.fr/les-concours/cpge/', description: 'Un autre concours pour des écoles privées spécialisées dans divers domaines technologiques.', schools: [
    { name: 'CPE Lyon', url: 'https://www.cpe.fr/' },
    { name: 'ESEO', url: 'https://eseo.fr/' },
    { name: 'HEI', url: 'https://www.hei.fr/' },
    { name: 'ISEN', url: 'https://www.isen.fr/' }
  ]},
  { name: 'Concours G2E', url: 'https://concoursg2e.com/', description: 'Spécifique à la filière BCPST, orienté vers la géologie, l\'eau et l\'environnement.', schools: [
    { name: 'ENTPE', url: 'https://www.entpe.fr/' },
    { name: 'ENGEES', url: 'https://engees.unistra.fr/' },
    { name: 'ENSG', url: 'https://www.ensg.eu/' }
  ]},
]);

const testimonials = ref([
  { text: 'La prépa a été intense, mais c\'est là que j\'ai vraiment appris à travailler. Les khôlles m\'ont donné une aisance à l\'oral incroyable pour les concours et mes entretiens d\'embauche plus tard.', author: 'Antoine, ex-PCSI, ingénieur en aéronautique' },
  { text: 'L\'entraide entre élèves était notre plus grande force. On a beaucoup travaillé en groupe, ce qui m\'a préparé au mode projet que je retrouve aujourd\'hui en entreprise.', author: 'Juliette, ex-MP, développeuse IA' },
]);

const faq = ref([
  { question: 'Faut-il être premier de sa classe pour aller en prépa ?', answer: 'Non, pas nécessairement. Il faut surtout un dossier solide et équilibré dans les matières scientifiques, de bonnes appréciations et une forte motivation. La progression en Terminale est aussi très regardée.' },
  { question: 'Que se passe-t-il si je rate mes concours ?', answer: 'Il n\'y a pas de "ratage". La prépa valide des crédits ECTS (120 à la fin des 2 ans) qui permettent de rejoindre l\'université en 3ème année de Licence (L3). De plus, de nombreuses écoles proposent des admissions sur dossier.' },
  { question: 'Quelle est la différence entre une prépa "étoilée" et une "non-étoilée" ?', answer: 'En 2ème année, les classes "étoilées" (*) regroupent les meilleurs élèves et préparent de manière plus intensive aux concours les plus sélectifs (X, ENS, Mines, Centrale). Le programme est le même, mais le rythme et l\'approfondissement sont plus poussés.' },
  { question: 'Est-il possible d\'avoir une vie sociale en prépa ?', answer: 'Oui, mais elle est différente. Il est crucial de s\'aménager des temps de pause (sport, sorties courtes). La vie sociale se passe souvent avec les autres élèves de la prépa, car vous partagez une expérience forte et une grande entraide.' },
]);
</script>
