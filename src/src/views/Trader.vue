<script setup>
import AppLayout from "@/views/layout/AppLayout.vue";
import {ref} from "vue";
import BaseSorting from "@/components/base/BaseSorting.vue";
import UserPhoto from "@/components/user/UserPhoto.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import TraderProfile from "@/components/trader/TraderProfile.vue";
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
      <div class="col-start-1 col-end-5">
        <div class="flex items-center justify-between gap-1 mb-1-1/2">
          <div class="text-md font-base font-bold text-white">
            Активные сделки
          </div>
          <div>
            <base-sorting :list-sort="listPeriods" :selected-item="selectedItem"/>
          </div>
        </div>
      </div>
      <div class="col-start-5 col-end-6 -mt-1-1/2">
        <trader-profile/>
      </div>
    </div>

  </AppLayout>
</template>
