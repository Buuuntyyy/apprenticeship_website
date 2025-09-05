<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Le BUT : Un Diplôme, Deux Parcours</h2>
    <p class="text-body-1 mb-4">
      Le Bachelor Universitaire de Technologie (BUT) est un diplôme national de niveau licence (Bac+3) qui a remplacé le DUT. Dispensé en IUT (Institut Universitaire de Technologie), il se caractérise par un équilibre entre enseignement théorique et formation pratique.
    </p>
    <v-row>
      <v-col v-for="item in overviewItems" :key="item.title" cols="12" md="4">
        <v-card class="fill-height" variant="tonal">
          <v-card-title class="d-flex align-center">
            <v-icon :icon="item.icon" start></v-icon>
            {{ item.title }}
          </v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
defineProps({
  overviewItems: {
    type: Array as () => Array<{ title: string; icon: string; text: string }>,
    required: true,
  },
});
</script>
