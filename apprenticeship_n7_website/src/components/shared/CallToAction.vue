<template>
  <div class="text-center my-12">
    <h2 class="text-h4 mb-4">{{ title }}</h2>
    <v-btn
      :href="buttonUrl"
      target="_blank"
      rel="noopener"
      color="primary"
      size="large"
      append-icon="mdi-arrow-right"
    >
      {{ buttonText }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonUrl: {
    type: String,
    required: true,
  },
});
</script>
