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

const checked = ref(false);

</script>

<template>
  <div class="border-1 border-primary-40 divide-x-1 p-1/4 divide-white-10 flex items-center">
    <div v-for="item in periods" class="p-1/4 ">
      <label :for="item.period" class="cursor-pointer text-md font-light font-base text-white-50">
        {{item.label}}
      </label>
      <input type="radio"
             v-bind="$attrs"
             v-model="periods"
             class="hidden"
             :id="item.period"
             :value="item.period"
             :checked="checked"
             @change="checked = $event.target.checked">
    </div>
  </div>
</template>

<style scoped>

</style>