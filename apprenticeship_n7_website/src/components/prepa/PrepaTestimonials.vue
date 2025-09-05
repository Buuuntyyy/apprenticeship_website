<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Paroles d'Anciens</h2>
    <v-row>
      <v-col v-for="testimonial in testimonials" :key="testimonial.author" cols="12" md="6">
        <v-card variant="outlined" class="fill-height">
          <v-card-text>
            <v-icon icon="mdi-format-quote-open" class="float-left mr-2"></v-icon>
            {{ testimonial.text }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <span class="text-caption font-italic pr-4 pb-2">- {{ testimonial.author }}</span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
defineProps({
  testimonials: {
    type: Array as () => Array<{ text: string; author: string }>,
    required: true,
  },
});
</script>
