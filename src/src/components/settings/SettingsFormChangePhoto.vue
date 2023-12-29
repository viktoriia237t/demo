<script setup>
import userIcon from "@/assets/images/icon-user.svg"
import IconEdit from "@/components/icons/IconEdit.vue";
import {ref} from "vue";

const name = ref('Danil Bekenyov')
</script>

<template>
  <div class=" flex flex-col gap-1-1/2 translate-y-[120px]">
    <div class="relative w-148 mx-auto ">
      <div class="h-148 w-148 min-w-148 rounded-full bg-primary-35 grid place-items-center">
        <img :src="userIcon" alt="" class="h-74 w-74 min-w-74">
      </div>
      <div class="absolute right-0 bottom-0 cursor-pointer">
        <icon-edit class="h-36 w-36 min-w-36"/>
      </div>
    </div>
    <div contenteditable="true" v-bind:name="name" class="text-2-1/4 font-base font-bold text-white text-center outline-none z-1">
      {{ name }}
    </div>
  </div>

</template>

<style scoped>

</style>