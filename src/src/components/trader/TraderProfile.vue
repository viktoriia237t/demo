<script setup>

import UserPhoto from "@/components/user/UserPhoto.vue";
</script>

<template>
  <div class="bg-statistic-profit px-1-1/2 py-3-3/4">
    <div class="text-center text-white text-lg font-base font-bold mb-2-1/2">
      Профиль трейдера
    </div>
    <div class="flex justify-center mb-3/4">
      <user-photo :status="'offline'" :size="'72'"/>
    </div>
    <div class="text-center text-white text-lg font-base font-light">
      Qq7ZX9IpeB
    </div>
    <div class="pt-[76px]">
    <div class="text-white text-lg font-base font-bold mb-1-1/2">
      Аккаунт
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>