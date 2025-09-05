<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Les Principales Filières Scientifiques</h2>
    
    <v-card variant="outlined" class="mb-10">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Filière</th>
            <th class="text-left">Profil Idéal</th>
            <th class="text-left">Matières Clés</th>
            <th class="text-left">Débouchés (2A)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="filiere in filieres" :key="filiere.name">
            <td><strong>{{ filiere.name }}</strong></td>
            <td>{{ filiere.profile }}</td>
            <td>{{ filiere.subjects }}</td>
            <td>{{ filiere.outcomes }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <v-row>
      <v-col v-for="(filiere, index) in localFilieres" :key="filiere.name" cols="12" md="6">
        <v-card class="fill-height" variant="tonal">
          <v-card-title class="d-flex align-center">
            <v-icon :icon="filiere.icon" start></v-icon>
            {{ filiere.name }}
          </v-card-title>
          <v-card-subtitle>{{ filiere.shortDesc }}</v-card-subtitle>
          
          <v-card-actions>
            <v-btn @click="toggleDetails(index)" variant="text">
              {{ filiere.showDetails ? 'Masquer les détails' : 'En savoir plus' }}
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-if="filiere.showDetails">
              <v-divider></v-divider>
              <v-card-text>
                <ul>
                  <li v-for="detail in filiere.details" :key="detail" class="mb-2">{{ detail }}</li>
                </ul>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue';

interface Filiere {
  name: string;
  icon: string;
  shortDesc: string;
  showDetails: boolean;
  details: string[];
  profile: string;
  subjects: string;
  outcomes: string;
}

const props = defineProps({
  filieres: {
    type: Array as PropType<Filiere[]>,
    required: true,
  },
});

const localFilieres = ref<Filiere[]>(JSON.parse(JSON.stringify(props.filieres)));

const toggleDetails = (index: number) => {
  localFilieres.value[index].showDetails = !localFilieres.value[index].showDetails;
};
</script>
