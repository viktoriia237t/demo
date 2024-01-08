<script setup>
defineProps({
  status: {
    type: String,
    default: null
  }
})
</script>

<template>
<div :class="{
  'text-green': status === 'active',
  'text-red': status === 'inactive'
}">
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6.5" r="6" fill="currentColor" fill-opacity="0.3"/>
    <circle cx="6" cy="6.5" r="3" fill="currentColor"/>
  </svg>
</div>
</template>

<style scoped>

</style>