import { useRouter } from 'vue-router'

const locations = [
  {
    "name": "Ituzaingó",
    "lat": -34.6583293,
    "lon": -58.6671441,
    "country": "AR",
    "state": "Buenos Aires"
  },
  {
    "name": "Ramayo",
    "lat": -34.8477309,
    "lon": -56.1436365,
    "country": "UY",
    "state": "Montevideo"
  },
  {
    "name": "Municipio de Olavarria",
    "lat": -27.5896182,
    "lon": -56.6893413,
    "country": "AR",
    "state": "Corrientes"
  },
  {
    "name": "Peperina",
    "lat": -31.4648072,
    "lon": -64.0957127,
    "country": "AR",
    "state": "Córdoba"
  },
  {
    "name": "Purpurina",
    "lat": -34.420459,
    "lon": -56.4236658,
    "country": "UY",
    "state": "San José"
  }
]

export default function useLocations() {
  const $router = useRouter()

  return {
    async filter(search = '') {
      return locations.filter(l => l.name.toLowerCase().includes(search.toLowerCase()))
    },
    async find({ lat, lon }) {
      return locations.find(l => l.lat === lat && l.lon === lon ) || {}
    },
    async show({ lat, lon }) {
      await $router.push({ path: '/place', query: { lat, lon } })
    },
  }
}