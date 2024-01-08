<script setup>
import AppLayout from "@/views/layout/AppLayout.vue";
import {ref} from "vue";
import BaseSorting from "@/components/base/BaseSorting.vue";
import TraderFilter from "@/components/traders/TraderFilter.vue";
import TradersTable from "@/components/table/TradersTable.vue";
import BasePagination from "@/components/base/BasePagination.vue";


const listPeriods = ['Депозитам', ' ROI', 'Прибыльным сделкам', 'Объему', 'Pnl'];
const selectedItem = ref('Сортировать по');
</script>

<template>
  <AppLayout>
    <template #header>
      <div class="text-lg text-white font-base font-bold">
        Трейдера
      </div>
    </template>
    <div>
      <div class="flex items-center justify-between gap-1 mb-1-1/2">
        <div>
          <trader-filter/>
        </div>
        <div>
          <base-sorting :list-sort="listPeriods" :selected-item="selectedItem"/>
        </div>
      </div>
      <traders-table/>
    </div>
    <div class="flex justify-end py-2">
      <base-pagination/>
    </div>
  </AppLayout>
</template>
