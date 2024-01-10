
<script setup>
import AppLayout from "@/views/layout/AppLayout.vue";
import UserPhoto from "@/components/user/UserPhoto.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import BasePagination from "@/components/base/BasePagination.vue";
import TableTransactions from "@/components/table/TransactionTable/TableTransactions.vue";
import BaseSorting from "@/components/base/BaseSorting.vue";
import {ref} from "vue";
import TopLineFilter from "@/components/market/TopLineFilter.vue";
import BottomLineFilter from "@/components/market/BottomLineFilter.vue";



const listPeriods = ['Депозитам', ' ROI', 'Прибыльным сделкам', 'Объему', 'Pnl'];
const selectedItem = ref('Сортировать по');
</script>

<template>
  <AppLayout>
    <template #header>

      <div class="flex items-center">
        <div class="flex items-center gap-1-1/2">
          <div class="cursor-pointer border-1 border-primary-40 p-1/2">
            <icon-arrow-left aclass="h-16 w-16 min-w-16"/>
          </div>

          <div class="flex items-center gap-3/4">
            <user-photo/>
            <div class="text-sm font-base font-normal text-white whitespace-nowrap transition-width duration-300">
              Qq7ZX9IpeB
            </div>
          </div>
        </div>
      </div>

    </template>
    <div class="grid grid-cols-5 gap-1-1/2">
      <div class="col-start-1 col-end-4">
        <top-line-filter/>
        <bottom-line-filter/>
      </div>
      <div class="col-start-4 col-end-6">
        <div class="flex items-center justify-between gap-1 mb-1-1/2">
          <div class="text-md font-base font-bold text-white">
            Активные сделки
          </div>
          <div>
            <base-sorting :list-sort="listPeriods" :selected-item="selectedItem"/>
          </div>
        </div>
        <table-transactions :status="'active'"/>
        <div class="flex items-center justify-between gap-1 my-1-1/2 relative">
          <div class="w-full relative">
            <div class="text-sm font-base font-bold z-2 text-white px-1 -top-[10px] absolute left-half transform -translate-x-half bg-primary-100">
              <span class="opacity-30 ">
                закрытые
              </span>
            </div>
            <span class="w-full h-[1px] bg-primary-40 block z-1"></span>
          </div>

          <div>
            <base-sorting :list-sort="listPeriods" :selected-item="'Сегодня'"/>
          </div>
        </div>

        <table-transactions :status="'inactive'"/>
        <div class="flex justify-end py-2">
          <base-pagination/>
        </div>
      </div>
    </div>

  </AppLayout>
</template>
