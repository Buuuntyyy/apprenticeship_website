<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-sheet rounded="lg" class="pa-6 pa-md-8" elevation="2">
          <h1 class="text-h3 text-center mb-12">Mentions Légales et Politique de Confidentialité</h1>

          <div v-for="(section, i) in legalSections" :key="section.title">
            <v-divider v-if="i > 0" class="my-8"></v-divider>
            
            <div class="d-flex align-start mb-4">
              <v-icon :icon="section.icon" color="primary" class="mr-4 mt-1" size="large"></v-icon>
              <div>
                <h2 class="text-h5">{{ section.title }}</h2>
                <div v-if="section.subtitle" class="text-grey-darken-1 text-caption">{{ section.subtitle }}</div>
              </div>
            </div>
            
            <div class="pl-16 text-body-1" v-html="section.content"></div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const legalSections = ref([
  {
    icon: 'mdi-gavel',
    title: '1. Informations Légales',
    subtitle: 'Identification de l\'éditeur du site',
    content: `
      <p><strong>Nom du site :</strong> Guide de l'Apprentissage Ingénieur</p>
      <p><strong>Propriétaire et Directeur de la publication :</strong> Flavien BARRÉ</p>
      <p><strong>Adresse :</strong> France</p>
      <p><strong>Email :</strong> <a href="mailto:[votre.email@example.com]">[votre.email@example.com]</a></p>
    `
  },
  {
    icon: 'mdi-server-network',
    title: '2. Hébergement',
    subtitle: 'Informations sur l\'hébergeur du site',
    content: `
      <p>Ce site est hébergé par :</p>
      <p><strong>Hébergeur :</strong> VERCEL INC.</p>
      <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
      <p><strong>Site Web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener">https://vercel.com</a></p>
    `
  },
  {
    icon: 'mdi-file-document-check-outline',
    title: '3. Conditions Générales d\'Utilisation (CGU)',
    subtitle: 'Propriété intellectuelle et responsabilité',
    content: `
      <p><strong>Propriété Intellectuelle :</strong> L'ensemble de ce site (contenus, textes, images, vidéos, logos) constitue une œuvre protégée par la législation en vigueur sur la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans l'autorisation préalable et écrite du directeur de la publication.</p>
      <p><strong>Limitation de responsabilité :</strong> Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes. Le propriétaire du site ne saurait être tenu pour responsable des erreurs, omissions, ou des résultats qui pourraient être obtenus par un mauvais usage de ces informations. Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité du propriétaire du site.</p>
    `
  },
  {
    icon: 'mdi-shield-lock-outline',
    title: '4. Politique de Confidentialité (RGPD)',
    subtitle: 'Gestion des données personnelles',
    content: `
      <p><strong>Préambule :</strong> Le respect de votre vie privée est notre priorité. Cette politique de confidentialité a pour but de vous informer sur la manière dont vos informations sont (ou ne sont pas) traitées sur ce site, en conformité avec le Règlement Général sur la Protection des Données (RGPD).</p>
      <p><strong>Responsable du traitement :</strong> Le responsable du traitement des données est le propriétaire du site, mentionné à l'article 1.</p>
      <p><strong>Données personnelles collectées :</strong> Ce site a été conçu pour ne collecter <strong>aucune donnée personnelle identifiable</strong> (nom, email, etc.) lors de votre navigation. Vous pouvez le parcourir de manière totalement anonyme. Les données techniques (telles que l'adresse IP) peuvent être temporairement enregistrées dans les journaux du serveur de notre hébergeur à des fins de sécurité et de maintenance, conformément à leurs propres politiques de confidentialité, sans que nous n'y ayons un accès direct ou que nous les utilisions à des fins d'identification.</p>
      <p><strong>Cookies :</strong> Nous n'utilisons aucun cookie de suivi, de marketing ou d'analyse. Les seuls cookies susceptibles d'être déposés sont des cookies techniques et fonctionnels, strictement nécessaires au bon fonctionnement du site et à la fourniture du service (par exemple, pour la session de navigation). Ces cookies ne nécessitent pas votre consentement préalable.</p>
      <p><strong>Vos droits :</strong> Conformément au RGPD, vous disposez des droits suivants : droit d'accès, de rectification, d'effacement, de limitation du traitement, et d'opposition. Étant donné qu'aucune donnée personnelle n'est collectée, ces droits sont par nature sans objet. Toutefois, pour toute question relative à la protection des données, vous pouvez contacter le responsable du traitement à l'adresse email mentionnée à l'article 1.</p>
    `
  },
  {
    icon: 'mdi-creation',
    title: '5. Crédits',
    subtitle: 'Remerciements et technologies utilisées',
    content: `
      <p>Les icônes utilisées sur ce site proviennent de <a href="https://materialdesignicons.com/" target="_blank" rel="noopener">Material Design Icons</a>.</p>
      <p>Le framework utilisé est <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a> avec la librairie de composants <a href="https://vuetifyjs.com/" target="_blank" rel="noopener">Vuetify</a>.</p>
      <p>Ce site a été développé à l'aide d'Intelligence Artificielle.</p>
    `
  },
  {
    icon: 'mdi-scale-balance',
    title: '6. Droit Applicable',
    subtitle: 'Juridiction compétente',
    content: '<p>Tout litige en relation avec l’utilisation du site est soumis au droit français.</p>'
  }
]);
</script>
