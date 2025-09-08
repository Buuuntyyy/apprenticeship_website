<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Origine des Étudiants en BUT</h2>
    <p class="mb-6">
      Les IUT ont pour vocation de diversifier les profils. La répartition des nouveaux inscrits en première année de BUT montre une mixité entre les différentes filières du lycée, avec un objectif national d'accueillir 50% de bacheliers technologiques.
    </p>
    <v-card variant="outlined">
      <v-list>
        <v-list-item
          v-for="origin in origins.data"
          :key="origin.type"
          :title="origin.type"
        >
          <template v-slot:append>
            <div class="d-flex align-center">
              <span class="font-weight-bold mr-4">{{ origin.value }}%</span>
              <div style="width: 150px">
                <v-progress-linear :model-value="origin.value" :color="origin.color" height="10" rounded></v-progress-linear>
              </div>
            </div>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
    <div class="text-caption text-right mt-2">
      Source : <a :href="origins.source.url" target="_blank" rel="noopener">{{ origins.source.name }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

interface OriginData {
  type: string;
  value: number;
  color: string;
}

interface OriginSource {
  name: string;
  url: string;
}

interface Origins {
  source: OriginSource;
  data: OriginData[];
}

defineProps({
  origins: {
    type: Object as PropType<Origins>,
    required: true,
  },
});
</script>
