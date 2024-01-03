<script setup>
defineProps({
  title: {
    type: String
  },
  value: {
    type: String
  }
})
</script>

<template>
  <div class="bg-white-30 backdrop-blur-10 p-1-1/2 flex flex-col gap-1-1/2">
    <div class="text-white text-md font-bold font-base">
      {{ title }}
    </div>
    <div class="flex justify-between items-center">
      <div class="text-2-1/4 font-bold font-base text-white">
        {{value}}
      </div>
      <slot name="label">
      </slot>
    </div>
  </div>
</template>

<style scoped>

</style>