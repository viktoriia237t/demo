<script setup>

import StatisticCard from "@/components/statistic/StatisticCard.vue";
import mainStatistigBg from "@/assets/images/abstract-space-texture.png";
import BaseLabel from "@/components/base/BaseLabel.vue";
</script>

<template>
<div class="border-1 border-primary-40 h-460 flex flex-col justify-end p-1-1/2 relative">
  <img :src="mainStatistigBg" alt="img"
       class="top-0 bottom-0 left-0 right-0 object-cover absolute z-0 h-[458px]">
  <div class="text-4 font-bold font-base mb-2 leading-1 z-1">
    Общая <br> статистика
  </div>
  <div class="grid grid-cols-4 gap-3/4 z-1">
      <statistic-card :title="'Общее кол-во трейдеров'" :value="'7 857'"/>
      <statistic-card :title="'Новые трейдера'" :value="'367'"/>
      <statistic-card :title="'Активные трейдера'" :value="'5 156'"/>
    <statistic-card :title="'Заработок'" :value="'487К $'">
      <template #label>
        <base-label :value="'+6.08%'"/>
      </template>
    </statistic-card>
  </div>
</div>
</template>

<style scoped>

</style>