<script setup>

import MarketSortTime from "@/components/market/MarketSortTime.vue";
import IconChevronRight from "@/components/icons/IconChevronRight.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import LabelCoin from "@/components/table/LabelCoin.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
</script>

<template>
  <div class="flex items-center text-white border-1 border-primary-35 bg-primary-120">
    <div class="flex items-center p-[7px] gap-3/4 ">
      <icon-search/>
      <div>
        <label-coin :fill-bg="false" :name="'Bitcoin (BTC)'" :image-name="'c-btc'"/>
      </div>
      <icon-plus/>
    </div>
    <div class="px-3/4">
      <svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.25" y="0.75" width="0.5" height="20.5" fill="#2C2D32" stroke="#2C2D32" stroke-width="0.5"/>
      </svg>

    </div>
    <div class="flex items-center gap-1/2">
      <market-sort-time/>
      <span class="cursor-pointer rotate-90 text-white">
        <icon-chevron-right/>
      </span>
    </div>
  </div>

</template>

<style scoped>

</style>