<template>
  <main class="stack">
    <h2>What's the weather like in...</h2>
    <SearchForm
      v-model:search="search"
      @submit="onSearchSubmit"
    />
    <h3>Wich {{ search }}?</h3>
    <LocationList 
      :items="results"
      @click="onLocationClick"
    />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SearchForm from '../components/SearchForm.vue';
import LocationList from '../components/LocationList.vue';

const $route = useRoute()
const $router = useRouter()

const search = ref($route.query.place || '')
const results = ref([])

async function searchLocations() {
  results.value = [
    {
      "name": "Ituzaingó",
      "lat": -34.6583293,
      "lon": -58.6671441,
      "country": "AR",
      "state": "Buenos Aires"
    },
    {
      "name": "Ituzaingó",
      "lat": -34.8477309,
      "lon": -56.1436365,
      "country": "UY",
      "state": "Montevideo"
    },
    {
      "name": "Municipio de Ituzaingó",
      "local_names": {
          "es": "Municipio de Ituzaingó"
      },
      "lat": -27.5896182,
      "lon": -56.6893413,
      "country": "AR",
      "state": "Corrientes"
    },
    {
      "name": "Ituzaingó",
      "lat": -31.4648072,
      "lon": -64.0957127,
      "country": "AR",
      "state": "Córdoba"
    },
    {
      "name": "Ituzaingó",
      "lat": -34.420459,
      "lon": -56.4236658,
      "country": "UY",
      "state": "San José"
    }
  ]
}

function onSearchSubmit() {
  
}

function onLocationClick({ lat, lon }) {
  $router.push({ path: '/place', query: { lat, lon } })
}

onMounted(async () => {
  await searchLocations()
})
  
</script>