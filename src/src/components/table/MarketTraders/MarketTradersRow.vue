<script setup>

import {inject} from "vue";
import IconShowMore from "@/components/icons/IconShowMore.vue";
import IconChartLine from "@/components/icons/IconChartLine.vue";
import LabelCoin from "@/components/table/LabelCoin.vue";
import LabelValue from "@/components/table/LabelValue.vue";
import IconEyeClosed from "@/components/icons/IconEyeClosed.vue";
import IconEye from "@/components/icons/IconEye.vue";

defineProps({
  row: {
    type: Object,
  },
  index: null,
  status: {
    type: String,
    default: 'active'
  },
  isOpen: {
    type: Boolean,
    default: true
  }
});

const gridMarketTraders = inject('gridMarketTraders');
</script>


<template>
  <div class="flex items-center justify-between border-1 px-3/4 gap-x-3/4 py-1 relative z-1"
       :class="{
          'bg-primary-85 border-transparent' : status === 'active',
          'bg-transparent border-primary-40' : status === 'inactive',
          'opacity-50': !isOpen
        }">
    <div v-for="(col, key) in row" class="text-md font-base font-normal gap-y-1/2"
         :class="gridMarketTraders[key].width">
      <span v-if="key ===  'id'" class="font-medium">
        <RouterLink to="/market">
          {{ col.value }}
        </RouterLink>
      </span>

      <span v-else-if="key ===  'icon'" class="cursor-pointer" @click="isOpen = !isOpen">
        <span v-if="col.value === 'open' && isOpen">
          <icon-eye/>
        </span>
        <span v-else>
          <icon-eye-closed/>
        </span>
      </span>
      <span v-else-if="key ===  'profit'">
        <label-value :size="'md'" :value="col.value"/>
      </span>
      <span v-else-if="key ===  'profitPercent'" class="flex justify-end">
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