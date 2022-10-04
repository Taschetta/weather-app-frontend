<template>
  <main class="stack">
    <h2>What's the weather like in...</h2>
    <SearchForm
      v-model:search="search"
      @submit="filterLocations"
    />
    <h3>Wich {{ search || 'place' }}?</h3>
    <LocationList 
      :items="locations"
      @click="$locations.show"
    />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import SearchForm from '../components/SearchForm.vue';
import LocationList from '../components/LocationList.vue';

import useLocations from '../composables/useLocations.js'

const $route = useRoute()
const $locations = useLocations()

const search = ref($route.query.place || '')
const locations = ref([])

async function filterLocations() {
  locations.value = await $locations.filter(search.value)
  if(locations.value.length === 1) {
    $locations.show(locations.value[0])
  }
}

onMounted(async () => {
  await filterLocations()
})
  
</script>