<script setup>
import AppLayout from "@/views/layout/AppLayout.vue";
import StatisticFull from "@/components/statistic/StatisticFull.vue";
import StatisticDeposite from "@/components/statistic/StatisticDeposite.vue";
import StatisticTraders from "@/components/statistic/StatisticTraders.vue";
import StatisticProfitAndLost from "@/components/statistic/StatisticProfitAndLost.vue";
import BaseSortTime from "@/components/base/BaseSortTime.vue";
import BaseCalendar from "@/components/base/BaseCalendar.vue";
</script>

<template>
  <AppLayout>
    <template #header>
      <div class="text-lg text-white font-base font-bold">
        Cтатистика
      </div>
    </template>
    <div>
      <div class="flex items-center justify-between">
        <div>
          <base-sort-time />
        </div>
        <div>
          <base-calendar :format="'dd MMMM, yyyy'"/>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-1-1/2 pt-2">
        <div class="col-start-1 col-end-4">
         <statistic-full/>
        </div>
        <div class="col-start-4 col-end-5">
          <statistic-deposite/>
        </div>
        <div class="col-start-1 col-end-3">
          <statistic-traders/>
        </div>
        <div class="col-start-3 col-end-5">
          <statistic-profit-and-lost/>
        </div>
      </div>
    </div>


  </AppLayout>
</template>
