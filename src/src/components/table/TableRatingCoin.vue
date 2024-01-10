<script setup>

import LabelCoin from "@/components/table/LabelCoin.vue";
import LabelValue from "@/components/table/LabelValue.vue";

const tableItems = [
  {
    id: 0,
    coinName: 'BTCUSDT',
    coinImg: 'c-btc',
    value: 5421
  },
  {
    id: 1,
    coinName: 'ETHUSDT',
    coinImg: 'c-eth',
    value: 12354
  },
  {
    id: 2,
    coinName: 'TRBUSDT',
    coinImg: 'c-trb',
    value: -533
  },
  {
    id: 3,
    coinName: 'CFXUSDT',
    coinImg: 'c-cfx',
    value: 4352
  },
  {
    id: 4,
    coinName: 'BTCUSDT',
    coinImg: 'c-btc',
    value: 54321
  },
  {
    id: 5,
    coinName: 'ETHUSDT',
    coinImg: 'c-eth',
    value: 12354
  },
  {
    id: 6,
    coinName: 'TRBUSDT',
    coinImg: 'c-trb',
    value: -533
  },
  {
    id: 7,
    coinName: 'CFXUSDT',
    coinImg: 'c-cfx',
    value: 4352
  },
]

</script>

<template>

  <table class="w-full">
    <thead>
      <tr class="text-sm font-base font-normal text-white-30 ">
        <th class="pb-3/4">#</th>
        <th class="text-left pl-3/4 pb-3/4">Монета</th>
        <th class="text-right px-3/4 pb-3/4">Pnl, $</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableItems" class="odd:bg-[#1c1d24] even:bg-[#23242d]">
        <td class="text-white-50 text-sm font-base font-normal text-center py-1/2">
          <span v-if="index <= 9">
            0{{index+1}}
          </span>
          <span v-else>
            {{index+1}}
          </span>
        </td>

        <td class="py-1/2">
          <label-coin :name="item.coinName" :image-name="item.coinImg"/>
        </td>
        <td class="py-1/2 text-end px-3/4 ">
          <label-value :value="item.value"/>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<style scoped>

</style>