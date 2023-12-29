<script setup>
import {useMenuStore} from "@/stores/menuStore.js";

const menu = useMenuStore()
</script>

<template>
  <div class="flex items-center text-lg text-white font-base font-normal gap-3/4 py-1/2 pl-1/2 opacity-50
     item-nav-link transition duration-400 hover:opacity-100 hover:font-bold hover:bg-white-6 hover:border-primary-30
  focus:opacity-100 focus:font-bold focus:bg-white-6 focus:border-primary-30 border-transparent"
       :class="{
        'focus:border-r-2 hover:border-r-2 border-r-2': menu.shown,
        'focus:border-b-2 hover:border-b-2 border-b-2': !menu.shown,
         }"

  >
    <span class="w-24 h-24 min-w-24">
      <slot name="icon"></slot>
    </span>
    <div class="whitespace-nowrap transition-width duration-300 overflow-x-hidden"
         :class="{
            'w-full overflow-x-auto': menu.shown,
            '': !menu.shown,
          }">
      <slot></slot>
    </div>
  </div>
</template>

<style>

.active > .item-nav-link {
  @apply opacity-100 font-bold bg-white-6 border-primary-30;
}
</style>