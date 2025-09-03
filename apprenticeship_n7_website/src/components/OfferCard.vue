<template>
  <v-card class="mx-auto" max-width="400" hover @click="goToOfferDetails">
    <v-card-title>{{ offer.title }}</v-card-title>
    <v-card-subtitle>{{ offer.company }} - {{ offer.location }}</v-card-subtitle>
    <v-card-text>
      {{ offer.description.substring(0, 100) }}...
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text>
        Voir plus
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  offer: {
    type: Object as () => { id: number; title: string; company: string; location: string; description: string; },
    required: true,
  }
});

const router = useRouter();

const goToOfferDetails = () => {
  router.push({ name: 'OfferDetails', params: { id: props.offer.id } });
};
</script>
