<script setup>
import {ref} from "vue";
const  openDropdown = ref(false);


defineProps({
  listSort: {
    type: Array,
    default: null
  },
  selectedItem: {
    type: String,
    default: null
  }
})

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
            <path d="M4.66699 9.83301L8.00033 13.1663L11.3337 9.83301H4.66699Z" fill="white"/>
            <path d="M8.00033 3.83301L4.66699 7.16634H11.3337L8.00033 3.83301Z" fill="white"/>
          </g>
        </svg>
      </span>
    </div>
    <div v-if="openDropdown" class="border-1 border-primary-40 divide-y-1 divide-primary-40 shadow-lg bg-primary-80 w-178 absolute right-0 top-2 z-5">
      <div class="text-sm text-white font-normal font-base p-3/4 cursor-pointer" @click="selectedItem = item" v-for="item in listSort">
        {{item }}
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>