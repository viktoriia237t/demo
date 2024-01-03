<script setup>

import {ref} from "vue";

const periods = [
  {
    period: 'day',
    label: 'День'
  },
  {
    period: 'month',
    label: 'Місяць'
  },
  {
    period: 'year',
    label: 'Рік'
  },
]

const selectedItem = ref(false);

</script>

<template>
  <div class="border-1 border-primary-40 p-1/4  flex items-center">
    <div v-for="(item, index) in periods" class="p-1/4 flex items-center gap-1/4">
      <svg v-if="index !== 0 && index <= periods.length-1" width="1" height="17" viewBox="0 0 1 17"
           fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="17" stroke="white" stroke-opacity="0.1"/>
      </svg>
      <div>
        <label :for="item.period" class="cursor-pointer text-md font-base px-3/4 py-1/4"
               :class="{
        'bg-green-010 text-green font-bold ': selectedItem === item.period,
        'text-md font-light text-white-50 bg-transparent': selectedItem !== item.period,
      }"
        >
          {{ item.label }}
        </label>
        <input type="radio"
               v-model="selectedItem"
               class="hidden"
               :id="item.period"
               :value="item.period"
               @change="selectedItem">
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>