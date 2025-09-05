<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Le BUT en Chiffres</h2>
    <v-row>
      <v-col v-for="figure in figures" :key="figure.title" cols="12" md="4">
        <v-card :color="figure.color" variant="tonal" class="fill-height text-center pa-4">
          <div class="text-h6">{{ figure.title }}</div>
          <div class="text-h4 font-weight-bold my-2">{{ figure.value }}</div>
          <div class="text-caption">{{ figure.caption }}</div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
defineProps({
  figures: {
    type: Array as () => Array<{ title: string; value: string; caption: string; color: string }>,
    required: true,
  },
});
</script>
