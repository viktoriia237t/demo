<script setup>

import BaseInput from "@/components/base/BaseInput.vue";
</script>
<template>
  <div class="max-w-[488px] w-full mx-auto flex flex-col gap-3 px-1">
    <div class="text-lg text-white font-base font-bold">
      Персональная информация
    </div>
    <div class="flex flex-col gap-2">
      <base-input :label="'ADI'" :value="'Da&93jKduw8'" />
      <base-input :label="'E-mail'" :value="'bekenyov@gmail.com'" />
      <base-input :label="'Номер телефона'" :value="'+38 (098) 765-43-21'" />
    </div>
  </div>
</template>
<style scoped>

</style>