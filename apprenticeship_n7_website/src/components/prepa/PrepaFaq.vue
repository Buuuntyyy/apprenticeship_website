<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Foire Aux Questions</h2>
    <v-expansion-panels variant="popout">
      <v-expansion-panel
        v-for="item in faq"
        :key="item.question"
        :title="item.question"
        :text="item.answer"
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
defineProps({
  faq: {
    type: Array as () => Array<{ question: string; answer: string }>,
    required: true,
  },
});
</script>
