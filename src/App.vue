<template>
  <header>
    <h1>Weather App</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>