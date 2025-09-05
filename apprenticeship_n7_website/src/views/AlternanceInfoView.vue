<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="11" lg="10">
        <v-sheet rounded="lg" class="pa-6 pa-md-8" elevation="2">
          <h1 class="text-h3 text-center mb-4">L'Alternance en École d'Ingénieur</h1>
          <p class="text-body-1 text-center mb-8">
            L'alternance est un excellent moyen de financer ses études, d'acquérir une expérience professionnelle solide et de faciliter son insertion sur le marché du travail.
          </p>
          
          <v-row>
            <v-col cols="12" md="4">
              <v-card variant="tonal" class="fill-height">
                <v-card-title><v-icon start>mdi-currency-eur</v-icon>Statut Salarié</v-card-title>
                <v-card-text>L'étudiant signe un contrat de travail (apprentissage ou professionnalisation) et perçoit un salaire. Les frais de scolarité sont pris en charge par l'entreprise.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card variant="tonal" class="fill-height">
                <v-card-title><v-icon start>mdi-school-outline</v-icon>Rythme Alterné</v-card-title>
                <v-card-text>L'étudiant alterne des périodes de formation théorique à l'école et des périodes de mise en pratique en entreprise.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card variant="tonal" class="fill-height">
                <v-card-title><v-icon start>mdi-briefcase-check-outline</v-icon>Expérience Valorise</v-card-title>
                <v-card-text>Trois ans d'expérience professionnelle à la sortie de l'école, un atout majeur pour l'insertion professionnelle et une évolution de carrière plus rapide.</v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <div class="text-center mt-8">
            <v-btn to="/alternance/offres" color="primary" size="large">Voir les offres d'alternance</v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>
