<script setup>

import {inject} from "vue";
import IconShowMore from "@/components/icons/IconShowMore.vue";
import IconChartLine from "@/components/icons/IconChartLine.vue";
import LabelCoin from "@/components/table/LabelCoin.vue";
import LabelValue from "@/components/table/LabelValue.vue";

defineProps({
  row: {
    type: Object,
  },
  index: null,
  status:{
    type: String,
    default: 'active'
  }
});

const gridTransactions = inject('gridTransactions');
</script>


<template>
  <div class="flex items-center justify-between border-1 px-3/4 gap-x-3/4 py-1 relative z-1"
       :class="{
          'bg-primary-85 border-transparent' : status === 'active',
          'bg-transparent border-primary-40' : status === 'inactive'
        }">
    <div v-for="(col, key) in row" class="text-md font-base font-normal gap-y-1/2"
         :class="gridTransactions[key].width" >
      <span v-if="key ===  'action'" class="flex items-center gap-1-1/4 opacity-50">
        <icon-chart-line class="min-w-16 cursor-pointer"/>
        <icon-show-more class="min-w-16 cursor-pointer"/>
      </span>
      <span v-else-if="key ===  'status'" class="relative flex items-center gap-3/4">
        <span :class="{
            'text-red ': col.value === 'low',
            'text-green rotate-180': col.value === 'high',
          }">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5L8 12L2 5L14 5Z" fill="currentColor"/>
          </svg>
        </span>
      </span>
      <span v-else-if="key ===  'coin'">
        <label-coin :name="col.name" :image-name="col.icon"/>
      </span>
      <span v-else-if="key ===  'profit'">
        <label-value :size="'md'" :value="col.value" />
      </span>
      <span v-else-if="key ===  'profitPercent'">
        <label-value :size="'md'" :value="col.value" :font-bold="false" :percent="true"/>
      </span>
      <span v-else>
        {{ col.value }}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>