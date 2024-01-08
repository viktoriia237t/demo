<script setup>

import {ref} from "vue";

defineProps({
  name:{
    type: String
  }
})

const periods = [
  {
    period: 'day',
    label: 'Все',
    count: 784
  },
  {
    period: 'active',
    label: 'Активные',
    count: 596
  },
  {
    period: 'inactive',
    label: 'Неактивные',
    count: 215
  },
]

const selectedItem = ref(false);

</script>

<template>
  <div class="border-b-1 border-primary-40 pt-1/4 flex items-center">
    <div v-for="(item, index) in periods" class="pt-1/4 flex items-center gap-1/4">
      <div class="border-b-4 pb-1/4"
           :class="{
            'border-primary-30': selectedItem === item.period,
            'border-transparent': selectedItem !== item.period,
          }">
        <label :for="item.period" class="cursor-pointer text-md font-base px-3/4 py-1/8 leading-1 "
               :class="{
                'opacity-100': selectedItem === item.period,
                'opacity-50': selectedItem !== item.period,
              }"
          >
          {{ item.label }}
          <span class="text-white py-1/8 px-1/4 bg-primary-30 text-xs font-base font-normal rounded-1/8">
            {{item.count}}
          </span>
        </label>
        <input
            type="radio"
            v-model="selectedItem"
            class="hidden"
            :id="item.period"
            :value="item.period"
            @change="selectedItem">
      </div>

    </div>
  </div>
</template>
