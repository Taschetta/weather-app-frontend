<template>
  <div v-if="items.length > 0" class="location-list">
    <LocationDetails
      v-for="(item, index) in items" :key="index"
      v-bind="item"
      @click="onLocationClick(item)"
    />
  </div>
</template>

<script setup>
/* eslint-disable */
import { defineProps } from 'vue';
import LocationDetails from './LocationDetails.vue';

const props = defineProps({
  items: Array,
})

const emit = defineEmits([
  'click'
])

function onLocationClick(item) {
  emit('click', item)
}

</script>

<style lang="scss" scoped>

.location-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
  
</style>