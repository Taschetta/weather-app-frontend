<template>
  <article @click="onClick" class="location">
    <h4>{{ name }}</h4>
    <p>{{ state }} ({{ country }})</p>
  </article>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  name: String,
  lat: Number,
  lon: Number,
  country: String,
  state: String,
})

const emit = defineEmits([
  'click'
])

function onClick() {
  emit('click')
}

</script>

<style lang="scss" scoped>

.location {
  border: 1px solid var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
}

</style>