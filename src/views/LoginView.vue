<template>
  <main class="stack">
    <h2>Login</h2>
    <form class="form" id="FormLogin" @submit.prevent="onFormSubmit">
      <label for="InputName">Username</label>
      <input type="text" name="username" id="InputName" v-model="username">
      <label for="InputPassword">Password</label>
      <input type="password" name="password" id="InputPassword" v-model="password">
    </form>
    <div class="actions">
      <button form="FormLogin" type="submit" class="button wide">
        Login
      </button>
      <RouterLink to="/register">
        Register
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const username = ref("")
const password = ref("")

function onFormSubmit() {

}
  
</script>

<style lang="scss" scoped>

</style>
