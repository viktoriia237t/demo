<script setup>
import LabelValue from "@/components/table/LabelValue.vue";
import IconChartLine from "@/components/icons/IconChartLine.vue";
import LabelCoin from "@/components/table/LabelCoin.vue";
import IconShowMore from "@/components/icons/IconShowMore.vue";
import {inject, ref, Transition} from "vue";

defineProps({
  row: {
    type: Object,
  },
  childRows: {
    type: Array,
    default: []
  }
});

const grid = inject('grid');

const isOpen = ref(false);
</script>

<template>
  <div class="flex items-center justify-between bg-primary-85 px-3/4 gap-x-3/4 py-1 relative z-1">
      <div v-for="(col, key, index) in row" class="text-md font-base font-normal gap-y-1/2"
           :class="grid[key].width">
        <span v-if="key ===  'id'" class="text-white-50 text-sm font-base font-normal text-center">
          <span v-if="index <= 9">
            0{{ index + 1 }}
          </span>
          <span v-else>
            {{ index + 1 }}
          </span>
        </span>
        <span v-else-if="key ===  'api'" class="font-medium">
          {{ col.value }}
        </span>
        <span v-else-if="key ===  'chevron'" @click="isOpen = !isOpen">
          <svg class="cursor-pointer"
               :class="{
                'rotate-180': isOpen
               }"
               v-if="col.isShow" width="16" height="16" viewBox="0 0 16 16" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.75038 5.53027L7.80371 8.58361L10.8637 5.53027L11.8037 6.47027L7.80371 10.4703L3.80371 6.47027L4.75038 5.53027Z"
                fill="white"/>
          </svg>
        </span>
        <span v-else-if="key ===  'coin'">
          <label-coin :name="col.name" :image-name="col.icon"/>
        </span>
        <span v-else-if="key ===  'price'" class="relative flex items-center left-[-30px] gap-3/4">
          <span :class="{
            'text-red ': col.status === 'low',
            'text-green rotate-180': col.status === 'high',
          }">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5L8 12L2 5L14 5Z" fill="currentColor"/>
            </svg>
          </span>
          {{ col.value }}
        </span>
        <span v-else-if="key ===  'volume'">
          <label-value :size="'md'" :font-bold="false" :value="col.value"/>
        </span>
        <span v-else-if="key ===  'pnl'">
          <label-value :size="'md'" :value="col.value"/>
        </span>
        <span v-else-if="key ===  'action'" class="flex items-center gap-1-1/4 opacity-50">
          <icon-chart-line class="min-w-16 cursor-pointer"/>
          <icon-show-more class="min-w-16 cursor-pointer"/>
        </span>
        <span v-else>
          {{ col.value }}
        </span>
      </div>
  </div>
  <Transition>
    <div class="flex  flex-col gap-3/4 bg-primary-110 py-1" v-if="isOpen">
      <div v-for="childRow in childRows" class="flex items-center justify-between  px-3/4 gap-x-3/4">
        <div v-for="(col, key, index) in row" class="text-md font-base font-normal gap-y-3/4"
             :class="grid[key].width">
          <span v-if="childRow?.[key] && key === 'chevron'" class="relative">
            <span class="absolute w-[1px] left-[8px] h-[36px] bg-primary-40 top-[-36px] ">

            </span>
            <span class="absolute h-[1px] left-[8px] w-[26px] bg-primary-40 top-[0px]">

            </span>
          </span>
          <span v-if="childRow?.[key] && key === 'coin'">
            <label-coin :name="childRow?.[key].name" :image-name="childRow?.[key].icon"/>
          </span>
          <span v-if="childRow?.[key] && key === 'price'" class="relative flex items-center left-[-30px] gap-3/4">
            <span :class="{
            'text-red ': childRow?.[key].status === 'low',
            'text-green rotate-180': childRow?.[key].status === 'high',
          }">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L8 12L2 5L14 5Z" fill="currentColor"/>
              </svg>
            </span>
            {{ childRow?.[key].value }}
          </span>
          <span v-if="childRow?.[key] && key === 'volume'">
            <label-value :size="'md'" :font-bold="false" :value="childRow?.[key].value"/>
          </span>
        </div>
      </div>
    </div>
  </Transition>

</template>

<style scoped>

</style>