<script setup>

import LabelCoin from "@/components/table/LabelCoin.vue";
import LabelValue from "@/components/table/LabelValue.vue";


const grid = {
  id: {
    width: 'w-48',
    title: '#'
  },
  api: {
    width: 'w-126',
    title: 'АРІ'
  },
  deposit: {
    width: 'w-126',
    title: 'Депозит, $'
  },
  roi: {
    width: 'w-110',
    title: 'ROI, %'
  },
  deals: {
    width: 'w-120',
    title: 'Прибыльные сделки'
  },
  coin: {
    width: 'w-126',
    title: 'Монета'
  },
  price: {
    width: 'w-110',
    title: 'Цена'
  },
  volume: {
    width: 'w-110',
    title: 'Цена'
  },
  pnl: {
    width: 'w-126',
    title: 'Pnl, $'
  },
  action: {
    width: 'w-60',
    title: 'Действия'
  }
}


</script>

<template>

  <div class="px-3/4 flex justify-between gap-3/4 text-sm font-base font-normal text-white-30 ">
    <div v-for="(item, key) in grid" class="last:text-right"
         :class="grid[key].width">
      {{ item.title }}
    </div>
  </div>


  <!--  <span v-if="index <= 9">-->
  <!--    0{{ index + 1 }}-->
  <!--  </span>-->
  <!--  <span v-else>-->
  <!--    {{ index + 1 }}-->
  <!--  </span>-->
  <!--  <label-coin :name="item.coinName" :image-name="item.coinImg"/>-->

  <!--  <label-value :size="'md'" :value="item.value"/>-->

</template>

<style scoped>

</style>