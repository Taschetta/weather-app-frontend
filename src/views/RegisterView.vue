<template>
  <main class="stack">
    <h2>Register</h2>
    <form class="form" id="FormRegister" @submit.prevent="onFormSubmit">
      <label for="InputUsername">Username</label>
      <input type="text" name="username" id="InputUsername" v-model="username">
      <label for="InputPassword">Password</label>
      <input type="password" name="password" id="InputPassword" v-model="password">
      <label for="InputPasswordConfirm">Confirm Password</label>
      <input type="password" name="passwordConfirm" id="InputPasswordConfirm" v-model="passwordConfirm">
    </form>
    <div class="actions">
      <button class="button wide" type="submit" form="FormRegister">
        Register
      </button>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue';

const username = ref("")
const password = ref("")
const passwordConfirm = ref("")

function onFormSubmit() {

}
  
  
</script>
