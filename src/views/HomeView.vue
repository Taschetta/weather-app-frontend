<template>
  <main class="stack">
    <h2>What's the weather like in...</h2>
    <SearchForm 
      v-model:search="search"
      @submit="onSearchSubmit"
    />
    <h3>Your Favourites</h3>
    <LocationList
      :items="favourites"
      @click="onLocationClick"
    />
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchForm from '../components/SearchForm.vue'
import LocationList from '../components/LocationList.vue';  

const $router = useRouter()

const search = ref("")
const favourites = ref([])

async function loadFavourites() {
  favourites.value = [
    {
      "name": "Ituzaingó",
      "lat": -34.6583293,
      "lon": -58.6671441,
      "country": "AR",
      "state": "Buenos Aires",
      "temp": 289.88,
      "feels_like": 289.15,
      "temp_min": 289.23,
      "temp_max": 293.09,
      "pressure": 1021,
      "humidity": 59,
    },
    {
      "name": "Ituzaingó",
      "lat": -34.6583293,
      "lon": -58.6671441,
      "country": "AR",
      "state": "Buenos Aires",
      "temp": 289.88,
      "feels_like": 289.15,
      "temp_min": 289.23,
      "temp_max": 293.09,
      "pressure": 1021,
      "humidity": 59,
    },
    {
      "name": "Ituzaingó",
      "lat": -34.6583293,
      "lon": -58.6671441,
      "country": "AR",
      "state": "Buenos Aires",
      "temp": 289.88,
      "feels_like": 289.15,
      "temp_min": 289.23,
      "temp_max": 293.09,
      "pressure": 1021,
      "humidity": 59,
    },
  ]
}

function onSearchSubmit() {
  $router.push({ path: '/search', query: { place: search.value } })
}

function onLocationClick({ lat, lon }) {
  $router.push({ path: '/place', query: { lat, lon } })
}

onMounted(async () => {
  await loadFavourites()
})

</script>