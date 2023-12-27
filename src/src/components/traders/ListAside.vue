<script setup>

import IconAdd from "@/components/icons/IconAdd.vue";
import TraderItem from "@/components/traders/TraderItem.vue";
import {useMenuStore} from "@/stores/menuStore.js";
const menu = useMenuStore()
</script>

<template>
  <div class="flex flex-col gap-3/4 w-full overflow-auto">
    <div class="flex item-center gap-1/2 justify-between pl-1/2"
         :class="{
            'pl-1/2': menu.shown,
            'pl-1/4': !menu.shown,
          }"
    >
      <div class="text-lg text-white font-base font-bold flex items-center gap-1/2">
        <span>ТОП</span>
        <span
            :class="{
            'flex': menu.shown,
            'hidden': !menu.shown,
          }"
        >Трейдера</span>
      </div>
      <div class="p-1/2 text-white cursor-pointer"
           :class="{
            'hidden': !menu.shown,
            'block': menu.shown
          }">
        <span class="w-16 h-16 min-w-16">
          <icon-add />
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-1/2">
      <trader-item/>
      <trader-item/>
      <trader-item/>
      <trader-item/>
      <trader-item/>
    </div>
    <div class="flex justify-center">
      <div class="p-1/2 text-white cursor-pointer"
           :class="{
            'hidden': menu.shown,
            'block': !menu.shown
          }">
        <span class="w-16 h-16 min-w-16">
          <icon-add />
        </span>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>