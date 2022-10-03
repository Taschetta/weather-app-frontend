<template>
  <header id="header">
    <h1>Weather App</h1>
    <nav id="navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss">

#navigation {
  display: flex;
  gap: 0.5rem;
}

</style>