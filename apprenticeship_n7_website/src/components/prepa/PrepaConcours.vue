<template>
  <div>
    <h2 class="text-h4 mt-12 mb-6">Les Grands Concours et Leurs Écoles</h2>
    <p class="mb-6">
      À l'issue des deux années, les étudiants passent des concours qui déterminent l'école qu'ils pourront intégrer. Chaque concours, présenté ci-dessous, est un portail vers un groupe d'écoles spécifiques. Cliquez sur le nom d'un concours pour visiter son site officiel.
    </p>
    <v-expansion-panels variant="inset">
      <v-expansion-panel
        v-for="concours in concoursList"
        :key="concours.name"
      >
        <v-expansion-panel-title>
          <a :href="concours.url" target="_blank" rel="noopener" class="concours-link text-h6" @click.stop>
            {{ concours.name }}
          </a>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p class="mb-4">{{ concours.description }}</p>
          <v-chip 
            v-for="school in concours.schools" 
            :key="school.name" 
            class="ma-1" 
            label
            :href="school.url"
            target="_blank"
            rel="noopener"
            link
          >
            {{ school.name }}
          </v-chip>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
defineProps({
  concoursList: {
    type: Array as () => Array<{ 
      name: string; 
      url: string; 
      description: string; 
      schools: Array<{ name: string; url: string }> 
    }>,
    required: true,
  },
});
</script>

<style scoped>
.concours-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in-out;
}
.concours-link:hover {
  color: rgb(var(--v-theme-primary));
}
</style>
