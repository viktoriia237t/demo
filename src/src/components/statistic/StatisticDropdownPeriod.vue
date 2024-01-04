<script setup>
import {ref} from "vue";

const  openDropdown = ref(false);
const listPeriods = ['Сегодня', ' 10 дней', 'Месяц', 'Год'];
const selectedItem = ref('10 дней');
</script>

<template>
  <div class="relative">
    <div class="border-1 border-primary-40 flex items-center p-1/2 gap-1/2">
      <div class="text-md text-white font-normal font-base ">
        {{ selectedItem }}
      </div>
      <span class="cursor-pointer" @click="openDropdown = !openDropdown"
      :class="{
        'rotate-180' :openDropdown
      }">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M5.14296 6.03027L8.19629 9.08361L11.2563 6.03027L12.1963 6.97027L8.19629 10.9703L4.19629 6.97027L5.14296 6.03027Z" fill="white"/>
          </g>
        </svg>
      </span>
    </div>
    <div v-if="openDropdown" class="border-1 border-primary-40 divide-y-1 divide-primary-40 shadow-lg bg-primary-80 w-178 absolute right-0 top-2">
      <div class="text-sm text-white font-normal font-base p-3/4 cursor-pointer" @click="selectedItem = item" v-for="item in listPeriods">
        {{item }}
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>