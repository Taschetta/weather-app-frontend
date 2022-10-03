<template>
  <article class="weather-details stack">

  </article>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  name: String,
  state: String,
  country: String,
  temp: Number,
  feels_like: Number,
  temp_min: Number,
  temp_max: Number,
})

</script>

<style lang="scss" scoped>


</style>