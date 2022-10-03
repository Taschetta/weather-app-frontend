<template>
  <main class="stack weather-details ">
    <header>
      <h2>{{ place.name }}</h2>
      <p class="text-center">{{ place.state }} ({{ place.country }})</p>
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
    <section class="stack" v-if="alerts.length > 0">
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
            <td>{{ alert.on }}</td>
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
        <select name="on" id="InputOn" v-model="alert.on">
          <option value="Temperature">Temperature</option>
          <option value="Feels Like">Feels Like</option>
          <option value="Minimum">Minimum</option>
          <option value="Maximum">Maximum</option>
        </select>
        <label for="InputCondition">Condition</label>
        <select name="condition" id="InputCondition" v-model="alert.condition">
          <option value="Above">Above</option>
          <option value="Below">Below</option>
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

const $route = useRoute()

// eslint-disable-next-line no-unused-vars
const lat = ref($route.query.lat)
// eslint-disable-next-line no-unused-vars
const lon = ref($route.query.lon)

const place = ref({})
const weather = ref({})
const favourite = ref(false)

const alerts = ref([])
const alert = ref(null)

async function loadWeather() {

  place.value = {
    "name": "Ituzaingó",
    "lat": -34.6583293,
    "lon": -58.6671441,
    "country": "AR",
    "state": "Buenos Aires"
  }
  
  weather.value = {
    "coord": {
      "lon": -58.4371,
      "lat": -34.6076
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 289.88,
      "feels_like": 289.15,
      "temp_min": 289.23,
      "temp_max": 293.09,
      "pressure": 1021,
      "humidity": 59
    },
    "visibility": 10000,
    "wind": {
      "speed": 7.2,
      "deg": 100
    },
    "clouds": {
      "all": 0
    },
    "dt": 1664821559,
    "sys": {
      "type": 1,
      "id": 8224,
      "country": "AR",
      "sunrise": 1664789254,
      "sunset": 1664834268
    },
    "timezone": -10800,
    "id": 3435874,
    "name": "Caballito",
    "cod": 200
  }

}

function onFavouriteToggle() {
  favourite.value = !favourite.value
}

function onAlertInsert() {
  alert.value = {
    id: alerts.value.length,
    on: 'temperature',
    condition: 'above',
    value: weather.value.main.temp,
  }
}

function onAlertSubmit() {
  alerts.value.push(alert.value)
  alert.value = null
}

function onAlertRemove({ id }) {
  const index = alerts.value.findIndex(alert => alert.id === id)
  alerts.value.splice(index, 1)
}

onMounted(async () => {
  await loadWeather()
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