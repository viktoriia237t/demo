<script setup>

import MarketSortTime from "@/components/market/MarketSortTime.vue";
import IconChevronRight from "@/components/icons/IconChevronRight.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
</script>

<template>
  <div class="flex items-center text-white">
    <icon-search/>
    <icon-plus/>
  </div>
  <div class="flex items-center gap-1/2">
    <market-sort-time/>
    <span class="cursor-pointer rotate-90 text-white">
      <icon-chevron-right/>
    </span>
  </div>
</template>

<style scoped>

</style>