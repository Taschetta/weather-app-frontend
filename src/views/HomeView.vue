<template>
  <main class="stack">
    <h2>What's the weather like in...</h2>
    <SearchForm 
      v-model:search="search"
      @submit="onSearchSubmit"
    />
    <section class="stack" v-if="favourites.length">
      <h3>Your Favourites</h3>
      <LocationList
        :items="favourites"
        @click="onLocationClick"
      />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import SearchForm from '../components/SearchForm.vue'
import LocationList from '../components/LocationList.vue';  

import useFavourites from '../composables/useFavourites.js';

const $router = useRouter()
const $favourites = useFavourites()

const search = ref("")
const favourites = ref([])

async function loadFavourites() {
  favourites.value = await $favourites.load()
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