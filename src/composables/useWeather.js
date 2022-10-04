
const weathers = [
  {
    coord: {
      "lat": -34.6583293,
      "lon": -58.6671441,
    },
    main: {
      "temp": 289.88,
      "feels_like": 289.15,
      "temp_min": 289.23,
      "temp_max": 293.09,
      "pressure": 1021,
      "humidity": 59
    }
  },
  {
    coord: {
      "lat": -34.8477309,
      "lon": -56.1436365,
    },
    main: {
      "temp": 289.88,
      "feels_like": 289.15,
      "temp_min": 289.23,
      "temp_max": 293.09,
      "pressure": 1021,
      "humidity": 59
    },
  },
  {
    coord: {
      "lat": -27.5896182,
      "lon": -56.6893413,
    },
    main: {
      "temp": 289.88,
      "feels_like": 289.15,
      "temp_min": 289.23,
      "temp_max": 293.09,
      "pressure": 1021,
      "humidity": 59
    },
  },
  {
    coord: {
      "lat": -31.4648072,
      "lon": -64.0957127,
    },
    main: {
      "temp": 289.88,
      "feels_like": 289.15,
      "temp_min": 289.23,
      "temp_max": 293.09,
      "pressure": 1021,
      "humidity": 59
    },
  },
  {
    coord: {
      "lat": -34.420459,
      "lon": -56.4236658,
    },
    main: {
      "temp": 289.88,
      "feels_like": 289.15,
      "temp_min": 289.23,
      "temp_max": 293.09,
      "pressure": 1021,
      "humidity": 59
    },
  }
]

export default function useWeather() {
  return {
    async find({ lat, lon }) {
      return weathers.find(w => w.coord.lat === lat && w.coord.lon === lon) || {}
    }
  }
}