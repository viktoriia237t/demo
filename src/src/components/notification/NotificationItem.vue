<script setup>

import IconNotification from "@/components/icons/IconNotification.vue";
</script>

<template>
  <div class="flex gap-3/4">
    <div class="bg-primary-35 h-32 w-32 min-w-32 grid place-items-center p-1/2">
      <icon-notification class="h-16 w-16 min-w-16"/>
    </div>
    <div class="overflow-hidden flex flex-col gap-3/4">
      <div class="flex divide-x-1 divide-primary-white-20 gap-1/2">
        <div class="text-md font-base font-bold text-white">Lorem ipsum dol</div>
        <div class="text-primary-30 text-sm font-base font-normal pl-3/4">59 хвилин тому</div>
      </div>
      <div class="text-ellipsis overflow-hidden whitespace-nowrap text-md font-base font-normal text-white opacity-50">
        Felis eu et velit purus massa ipsum turpis.
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>