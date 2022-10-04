<template>
  <main class="stack weather-details ">
    <header>
      <h2>{{ location.name }}</h2>
      <p class="text-center">{{ location.state }} ({{ location.country }})</p>
    </header>
    <section class="stack">
      <h3>Weather</h3>
      <dl class="definition-list">
        <div>
          <dt>Temperature</dt>
          <dd>{{ weather.main?.temp }}</dd>
        </div>
        <div>
          <dt>Feels Like</dt>
          <dd>{{ weather.main?.feels_like }}</dd>
        </div>
        <div>
          <dt>Minimum</dt>
          <dd>{{ weather.main?.temp_min }}</dd>
        </div>
        <div>
          <dt>Maximum</dt>
          <dd>{{ weather.main?.temp_max }}</dd>
        </div>
      </dl>
    </section>
    <section class="stack" v-if="alerts.length">
      <h3>
        Alerts
      </h3>
      <table class="table">
        <thead>
          <tr>
            <th>Alert on</th>
            <th>Condition</th>
            <th>Temperature</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="alert in alerts" :key="alert.id">
            <td>{{ alert.property }}</td>
            <td>{{ alert.condition }}</td>
            <td>{{ alert.value }}F</td>
            <td>
              <button class="button square" @click="onAlertRemove(alert)">
                <CrossIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="stack" v-if="alert">
      <h3>New Alert</h3>
      <form class="form" v-if="alert" @submit.prevent="onAlertSubmit">
        <label for="InputOn">Alert on</label>
        <select name="on" id="InputOn" v-model="alert.propertyId">
          <option value="1">Temperature</option>
          <option value="2">Feels Like</option>
          <option value="3">Minimum</option>
          <option value="4">Maximum</option>
        </select>
        <label for="InputCondition">Condition</label>
        <select name="condition" id="InputCondition" v-model="alert.conditionId">
          <option value="1">Above</option>
          <option value="2">Below</option>
        </select>
        <label for="InputValue"> Temperature </label>
        <input type="number" name="value" id="InputValue" v-model="alert.value" step="0.01">
        <button>Add Alert</button>
      </form>
    </section>
    <section class="stack">
      <h3>Actions</h3>
      <div class="actions">
        <button class="button wide" @click="onFavouriteToggle">{{ favourite ? 'Remove from favorites' : 'Add to favourites' }}</button>
        <button class="button wide" @click="onAlertInsert">Add alert</button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CrossIcon from '../components/icons/CrossIcon.vue';

import useLocations from '../composables/useLocations.js';
import useFavourites from '../composables/useFavourites';
import useWeather from '../composables/useWeather.js';
import useAlerts from '../composables/useAlerts';

const $route = useRoute()
const $locations = useLocations()
const $favourites = useFavourites()
const $weather = useWeather()
const $alerts = useAlerts()

const location = ref({})
const weather = ref({})

const favourite = ref(false)
const alerts = ref([])
const alert = ref(null)

async function onFavouriteToggle() {
  await $favourites.toggle(location.value)
  await loadFavourite()
}

function onAlertInsert() {
  alert.value = $alerts.new(location)
}

async function onAlertSubmit() {
  await $alerts.insert(alert.value)
  await loadAlerts()
  alert.value = null
}

function onAlertRemove({ id }) {
  const index = alerts.value.findIndex(alert => alert.id === id)
  alerts.value.splice(index, 1)
}

async function loadLocation() {
  location.value = await $locations.find({
    lat: parseFloat($route.query.lat),
    lon: parseFloat($route.query.lon),
  })
}

async function loadWeather() {
  weather.value = await $weather.find({
    lat: parseFloat($route.query.lat),
    lon: parseFloat($route.query.lon),
  })
}

async function loadFavourite() {
  favourite.value = await $favourites.isFavourite(location.value)
}

async function loadAlerts() {
  alerts.value = await $alerts.filter(location.value)
}


onMounted(async () => {
  await loadLocation()
  await loadWeather()
  await loadFavourite()
  await loadAlerts()
})

</script>

<style lang="scss" scoped>
  
.weather-details {
  max-width: 500px;
  margin-inline: auto;

  .actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}

.definition-list > div {
  display: flex;
  
  > dt {
    flex-grow: 1;
  }
}

.alert-item {
  display: flex;
  justify-content: space-between;
}
</style>