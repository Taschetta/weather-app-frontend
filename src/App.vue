<template>
  <header id="header">
    <h1>Weather App</h1>
    <nav id="navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
  <aside>
    <article v-for="alert in messages" :key="alert.id">
      {{ alert.message }}
    </article>
  </aside>
  <RouterView />
</template>

<script setup>
import { onErrorCaptured } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import useAlerts from './composables/useAlerts.js'

const { messages } = useAlerts()

onErrorCaptured(error => {
  alert(error.message)
})

</script>

<style lang="scss">

#navigation {
  display: flex;
  gap: 0.5rem;
}

</style>