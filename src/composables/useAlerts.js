/* eslint-disable no-unused-vars */
import { reactive, toRef } from "vue";

const properties = {
  1: 'Temperature',
  2: 'Feels Like',
  3: 'Maximum',
  4: 'Minimum',
}

const conditions = {
  1: 'Above',
  2: 'Below',
}

const state = reactive({
  alerts: [
    {
      id: 1,
      lat: -34.6583293,
      lon: -58.6671441,
      value: 300,
      propertyId: 1,
      property: 'Temperature',
      conditionId: 1,
      condition: 'Above',
    }
  ],
  messages: [
    // { id: 1, message: 'Alert: The Temperature in Ituzaingó is above 300F' },
  ]
})

export default function useAlerts() {

  return {
    alerts: toRef(state, 'alerts'),
    messages: toRef(state, 'messages'),
    new({ lat, lon }) {
      const id = state.alerts.length
      return {
        id,
        lat, 
        lon,
        propertyId: 1,
        conditionId: 1,
        value: 0,         
      }
    },
    async filter({ lat, lon }) {
      return state.alerts.filter(a => a.lat === lat && a.lon === lon)
    },
    async insert(alert) {
      const { id, lat, len, propertyId, conditionId, value } = alert
      state.alerts.push({
        id,
        lat,
        len,
        propertyId,
        property: properties[propertyId],
        conditionId,
        condition: conditions[conditionId],
        value
      })
      console.log(state.alerts)
    },
  }
}