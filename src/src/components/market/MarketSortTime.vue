<script setup>

import {ref} from "vue";

defineProps({
  name: {
    type: String
  }
})

const periods = [
  {
    period: '1min',
    label: '1m'
  },
  {
    period: '5min',
    label: '5m'
  },
  {
    period: '15min',
    label: '15m'
  },
  {
    period: '30min',
    label: '30m'
  },
  {
    period: '1h',
    label: '1h'
  },
  {
    period: '4h',
    label: '4h'
  },

]

const selectedItem = ref('1min');

</script>

<template>
  <div v-for="(item, index) in periods" class=" flex items-center gap-1/2">
    <label :for="item.period" class="cursor-pointer font-base  py-[7px] border-b-1 hover:text-white
         hover:bg-primary-35 hover:font-bold hover:text-sm hover:border-white transition duration-400 h-32"
           :class="{
        'text-white bg-primary-35 font-bold text-sm border-white px-3/4': selectedItem === item.period,
        ' font-light text-white-50 bg-transparent text-md border-transparent px-1/8': selectedItem !== item.period,
      }"
    >
      {{ item.label }}
    </label>
    <input
        type="radio"
        v-model="selectedItem"
        class="hidden"
        :id="item.period"
        :value="item.period"
        @change="selectedItem">
  </div>
</template>

<style scoped>

</style>