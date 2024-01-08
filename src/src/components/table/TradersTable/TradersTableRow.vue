<script setup>

import LabelValue from "@/components/table/LabelValue.vue";
import IconStar from "@/components/icons/IconStar.vue";
import IconHistory from "@/components/icons/IconHistory.vue";
import {inject} from "vue";
import BaseStatus from "@/components/base/BaseStatus.vue";

defineProps({
  row: {
    type: Object,
  },
  index: null
});
const gridTraders = inject('gridTraders');

</script>


<template>
  <div class="flex items-center justify-between bg-primary-85 px-3/4 gap-x-3/4 py-1 relative z-1">
    <div v-for="(col, key) in row" class="text-md font-base font-normal gap-y-1/2"
         :class="gridTraders[key].width">
      <span v-if="key ===  'id'" class="text-white-50 text-sm font-base font-normal text-center">
        <span v-if="index <= 9">
          0{{ index + 1 }}
        </span>
        <span v-else>
          {{ index + 1 }}
        </span>
      </span>
      <span v-else-if="key ===  'api'" class="font-medium">
        <router-link to="/trader">
          {{ col.value }}
        </router-link>
      </span>
      <span v-else-if="key ===  'status'">
        <base-status :status="col.value"/>
      </span>
      <span v-else-if="key ===  'pnl'">
        <label-value :size="'md'" :value="col.value"/>
      </span>
      <span v-else-if="key ===  'action'" class="flex items-center gap-1-1/4 opacity-50">
        <icon-star class="min-w-16 cursor-pointer"/>
        <!--        <icon-star-fill class="min-w-16 cursor-pointer"/>-->
        <icon-history class="min-w-16 cursor-pointer"/>
      </span>
      <span v-else>
        {{ col.value }}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>