<script setup>

import TableTransactionsHeader from "@/components/table/TransactionTable/TableTransactionsHeader.vue";
import {provide} from "vue";
import TableTransactionsRow from "@/components/table/TransactionTable/TableTransactionsRow.vue";
defineProps({
  status:{
    type: String,
    default: 'active'
  }
})
const gridTransactions =
    {
      status: {
        width: 'w-24',
        title: ' ',
        sort: false,
      },
      coin: {
        width: 'w-178',
        title: 'Монета',
        sort: false,
      },
      time: {
        width: 'w-178',
        title: 'Время',
        sort: false,
      },
      price: {
        width: 'w-178',
        title: 'Цена покупки',
        sort: false,
      },
      volume: {
        width: 'w-178',
        title: 'Объем позиции',
        sort: true,
      },
      profit: {
        width: 'w-178',
        title: 'Профит, $',
        sort: false,
      },
      profitPercent: {
        width: 'w-178',
        title: 'Профит, $',
        sort: false,
      },

      action: {
        width: 'w-60',
        title: 'Действия',
        sort: false,
      }
    };

provide('gridTransactions', gridTransactions);


const dataTransaction = [
  {
    status: {
      value: 'low'
    },
    coin:{
      name: 'BTCUSDT',
      icon: 'c-btc'
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
    },
    action: {
      value: 'icon'
    }
  },
  {
    status: {
      value: 'high'
    },
    coin:{
      name: 'BTCUSDT',
      icon: 'c-btc'
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
    },
    action: {
      value: 'icon'
    }
  },
  {
    status: {
      value: 'high'
    },
    coin:{
      name: 'BTCUSDT',
      icon: 'c-btc'
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
    },
    action: {
      value: 'icon'
    }
  }
];


</script>

<template>
  <table-transactions-header :grid="gridTransactions"/>
  <div class="flex flex-col gap-1/2">
    <div v-for="(row, index, key) in dataTransaction">
      <table-transactions-row :row="row" :index="index" :status="status"/>
    </div>
  </div>
</template>

<style scoped>

</style>