<script setup>

import LabelCoin from "@/components/table/LabelCoin.vue";
import LabelValue from "@/components/table/LabelValue.vue";

const tableItems = [
  {
    coinName: 'BTCUSDT',
    coinImg: 'c-btc',
    value: 5421,
    change: 2.03
  },
  {
    coinName: 'ETHUSDT',
    coinImg: 'c-eth',
    value: 12354,
    change: -2.03
  },
  {
    coinName: 'TRBUSDT',
    coinImg: 'c-trb',
    value: -533,
    change: 0.83
  },
  {
    coinName: 'CFXUSDT',
    coinImg: 'c-cfx',
    value: 4352,
    change: 0.83
  },
  {
    coinName: 'BTCUSDT',
    coinImg: 'c-btc',
    value: 54321,
    change: 0.83
  },
  {
    coinName: 'ETHUSDT',
    coinImg: 'c-eth',
    value: 12354,
    change: -85.83
  },
  {
    coinName: 'TRBUSDT',
    coinImg: 'c-trb',
    value: -533,
    change: 85.83
  },
  {
    coinName: 'CFXUSDT',
    coinImg: 'c-cfx',
    value: 4352,
    change: -85.83
  },
]

</script>

<template>

  <table class="w-full">
    <thead>
    <tr class="text-sm font-base font-normal text-white-30">
      <th class="pb-3/4">Монета</th>
      <th class="text-left pl-3/4 pb-3/4">Объем</th>
      <th class="text-right px-3/4 pb-3/4">Change, %</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item) in tableItems" class="bg-[#1c1d24] hover:bg-[#2e2f3b]">
      <td class="py-1/2">
        <label-coin :name="item.coinName" :image-name="item.coinImg"/>
      </td>
      <td class="py-1/2 px-3/4 text-sm">
       {{item.value}}M
      </td>
      <td class="py-1/2 text-end px-3/4">
        <label-value :value="item.change" :size="'sm'"  :percent="true" :font-bold="false"/>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>

</style>