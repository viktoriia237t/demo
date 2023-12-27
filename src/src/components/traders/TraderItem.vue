<script setup>
import IconChewronRight from "@/components/icons/IconChewronRight.vue";
import UserPhoto from "@/components/user/UserPhoto.vue";
import {useMenuStore} from "@/stores/menuStore.js";

const menu = useMenuStore()
</script>

<template>

  <div class="flex items-center justify-between gap-1/2"
       :class="{
            'pl-1/2': menu.shown,
            'pl-1/4': !menu.shown,
          }">
    <div class="flex items-center gap-3/4">
      <user-photo/>
      <div class="text-sm font-base font-normal text-white whitespace-nowrap transition-width duration-300"
           :class="{
            'w-full overflow-x-auto': menu.shown,
            'overflow-x-hidden': !menu.shown,
          }">
        Qq7ZX9IpeB
      </div>
    </div>
    <div class="p-1/2 text-white cursor-pointer"
         :class="{
            'block': menu.shown,
            'hidden': !menu.shown,
            }"
    >
      <span class="w-16 h-16 min-w-16 opacity-50">
        <icon-chewron-right/>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>