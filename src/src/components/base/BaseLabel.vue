<script setup>

import IconRise from "@/components/icons/IconRise.vue";
defineProps({
  value: {

  }
})
</script>

<template>
<div class="bg-green-010 p-1/4 flex items-center gap-1/4 text-green">
  <div class="text-md font-semibold font-base">{{value}}</div>
  <div>
    <icon-rise/>
  </div>
</div>
</template>

<style scoped>

</style>