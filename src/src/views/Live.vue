<script setup>
import AppLayout from "@/views/layout/AppLayout.vue";
import LiveSorting from "@/components/live/LiveSorting.vue";
import TableRatingCoin from "@/components/table/TableRatingCoin.vue";
import TableRatingTraders from "@/components/table/TableRatingTraders.vue";
</script>

<template>
  <AppLayout>
    <template #header>
      <div class="text-lg text-white font-base font-bold">
        Live Trading
      </div>
    </template>

    <div class="grid grid-cols-5 gap-1-1/2 pt-1/2">
      <div class="col-start-1 col-end-5">
        <div class="flex justify-between items-center mb-2">
          <div class="text-md font-bold font-base text-white">
            Рейтинг трейдеров
          </div>
          <div>
            <live-sorting/>
          </div>
        </div>
      <table-rating-traders/>
      </div>
      <div class="col-start-5 col-end-6">
        <div class="text-md font-bold font-base text-white mb-2 h-40 flex items-center">
          Рейтинг монет
        </div>

        <table-rating-coin/>

      </div>
    </div>

  </AppLayout>
</template>
