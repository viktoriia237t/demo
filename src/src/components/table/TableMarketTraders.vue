<script setup>

import TableTransactionsHeader from "@/components/table/TransactionTable/TableTransactionsHeader.vue";
import {provide} from "vue";
import TableTransactionsRow from "@/components/table/TransactionTable/TableTransactionsRow.vue";
import MarketTradersHeader from "@/components/table/MarketTraders/MarketTradersHeader.vue";
import MarketTradersRow from "@/components/table/MarketTraders/MarketTradersRow.vue";
defineProps({
  isOpen: true,
})
const gridMarketTraders =
    {
      icon: {
        width: 'w-16',
        icon: 'close',
        sort: false,
      },
      id: {
        width: 'w-90',
        title: 'CXE9uaEZ ID',
        sort: false,
      },
      time: {
        width: 'w-90',
        title: 'Время',
        sort: false,
      },
      price: {
        width: 'w-90',
        title: 'Цена покупки',
        sort: false,
      },
      volume: {
        width: 'w-90',
        title: 'Объем',
        sort: true,
      },
      profit: {
        width: 'w-65',
        title: 'Профит, $',
        sort: false,
      },
      profitPercent: {
        width: 'w-65',
        title: 'Профит, %',
        sort: false,
      },
    };

provide('gridMarketTraders', gridMarketTraders);


const dataMarketTraders = [
  {
    icon: {
      value: 'open'
    },
    id:{
      value: 'CXE9uaEZ',
    },
    time: {
      value: '12.01.2023'
    },
    price:{
      value: '0.2743'
    },
    volume: {
      value: '1091.36'
    },
    profit:{
      value: 175
    },
    profitPercent:{
      value: 0.54
    }
  },
  {
    icon: {
      value: 'open'
    },
    id:{
      value: 'CXE9uaEZ',
    },
    time: {
      value: '12.01.2023'
    },
    price:{
      value: '0.2743'
    },
    volume: {
      value: '1091.36'
    },
    profit:{
      value: 175
    },
    profitPercent:{
      value: 0.54
    }
  },
  {
    icon: {
      value: 'open'
    },
    id:{
      value: 'CXE9uaEZ',
    },
    time: {
      value: '12.01.2023'
    },
    price:{
      value: '0.2743'
    },
    volume: {
      value: '1091.36'
    },
    profit:{
      value: 175
    },
    profitPercent:{
      value: 0.54
    }
  },
  {
    icon: {
      value: 'open'
    },
    id:{
      value: 'CXE9uaEZ',
    },
    time: {
      value: '12.01.2023'
    },
    price:{
      value: '0.2743'
    },
    volume: {
      value: '1091.36'
    },
    profit:{
      value: 175
    },
    profitPercent:{
      value: 0.54
    }
  },
  {
    icon: {
      value: 'open'
    },
    id:{
      value: 'CXE9uaEZ',
    },
    time: {
      value: '12.01.2023'
    },
    price:{
      value: '0.2743'
    },
    volume: {
      value: '1091.36'
    },
    profit:{
      value: 175
    },
    profitPercent:{
      value: 0.54
    }
  },
  {
    icon: {
      value: 'open'
    },
    id:{
      value: 'CXE9uaEZ',
    },
    time: {
      value: '12.01.2023'
    },
    price:{
      value: '0.2743'
    },
    volume: {
      value: '1091.36'
    },
    profit:{
      value: 175
    },
    profitPercent:{
      value: 0.54
    }
  },
  {
    icon: {
      value: 'open'
    },
    id:{
      value: 'CXE9uaEZ',
    },
    time: {
      value: '12.01.2023'
    },
    price:{
      value: '0.2743'
    },
    volume: {
      value: '1091.36'
    },
    profit:{
      value: 175
    },
    profitPercent:{
      value: 0.54
    }
  },
  {
    icon: {
      value: 'open'
    },
    id:{
      value: 'CXE9uaEZ',
    },
    time: {
      value: '12.01.2023'
    },
    price:{
      value: '0.2743'
    },
    volume: {
      value: '1091.36'
    },
    profit:{
      value: 175
    },
    profitPercent:{
      value: 0.54
    }
  },
];


</script>

<template>
  <market-traders-header :grid="gridMarketTraders"/>
  <div class="flex flex-col gap-1/2">
    <div v-for="(row, index, key) in dataMarketTraders">
      <market-traders-row :state="isOpen" :row="row" :index="index" />
    </div>
  </div>
</template>

<style scoped>

</style>