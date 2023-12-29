<script setup>

import BaseSwitch from "@/components/base/BaseSwitch.vue";
import BaseSwitchTheme from "@/components/base/BaseSwitchTheme.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";

const listLanguages = ['English', 'Українська', 'Ще якась мова']
</script>

<template>
  <div class="max-w-[488px] w-full mx-auto flex flex-col gap-3 px-1">
    <div class="text-lg text-white font-base font-bold">
      Настройки системы
    </div>
    <div class="flex flex-col gap-2">
      <base-switch-theme :label="'Тема'" />
      <base-select :label="'Язык'" :options="listLanguages" :selected-option="'English'"/>
      <base-switch :label="'Оповещения'" />
    </div>
  </div>
</template>

<style scoped>

</style>