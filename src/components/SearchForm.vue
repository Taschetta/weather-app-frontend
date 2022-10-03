<template>
  <form @submit.prevent="onFormSubmit" class="search">
    <label for="InputSearch" class="screen-reader-only">
      Search
    </label>
    <input 
      type="text" 
      name="search" 
      id="InputSearch" 
      :value="props.search"
      @input="onSearchInput"
    >
    <button class="button square">
      <SearchIcon />
    </button>
  </form>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import SearchIcon from "./icons/SearchIcon.vue";

const props = defineProps({
  search: String,
})

const emit = defineEmits([
  'update:search',
  'submit',
])

function onSearchInput(event) {
  emit('update:search', event.target.value)
}

function onFormSubmit() {
  emit('submit')
}

</script>

<style lang="scss" scoped>

.search {
  display: flex;

  input {
    flex-grow: 1;
    padding-inline: 0.5rem;
  }

  button {
    order: -1;
  }
}

</style>