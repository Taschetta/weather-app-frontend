import { reactive, toRef } from "vue";

const favourites = []

const state = reactive({
  items: []
})

export default function useFavourites() {
  return {
    items: toRef(state, 'items'),
    async load() {
      state.items = favourites.map((f => f))
      return favourites.map((f => f))
    },
    async toggle(location) {
      const { lat, lon } = location
      
      const index = favourites.findIndex(f => f.lat === lat && f.lon === lon)
      if(index === -1) {
        favourites.push(location)
      }
      else {
        favourites.splice(index, 1)
      }
      
      await this.load()
    },
    async isFavourite(location) {
      const { lat, lon } = location
      return favourites.some(f => f.lat === lat && f.lon === lon)
    }
  }
}