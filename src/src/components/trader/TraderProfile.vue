<script setup>

import UserPhoto from "@/components/user/UserPhoto.vue";
import LabelValue from "@/components/table/LabelValue.vue";
import IconStarFill from "@/components/icons/IconStarFill.vue";
</script>

<template>
  <div class="bg-statistic-profit px-1-1/2 py-3-3/4 h-full">
    <div class="text-center text-white text-lg font-base font-bold mb-2-1/2">
      Профиль трейдера
    </div>
    <div class="flex justify-center mb-3/4">
      <user-photo :status="'offline'" :size="'72'"/>
    </div>
    <div class="text-center text-white text-lg font-base font-light">
      Qq7ZX9IpeB
    </div>
    <div class="pt-[76px]">
      <div class="text-white text-lg font-base font-bold mb-1-1/2">
        Аккаунт
      </div>
      <div class="flex flex-col gap-3/4">
        <div class="flex justify-between items-center gap-1">
          <div class="text-md font-normal font-base text-white-50">
            Присоединился
          </div>
          <div class="text-md font-normal font-base text-white">
            18 октября, 2023
          </div>
        </div>
        <div class="flex justify-between items-center gap-1">
          <div class="text-md font-normal font-base text-white-50">
            Депозит
          </div>
          <div class="text-md font-normal font-base text-white">
            <label-value :size="'md'" :value="23854" />
          </div>
        </div>
      </div>
      <div class="py-3">
        <svg width="48" height="1" viewBox="0 0 48 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="47.75" y="0.250001" width="0.500001" height="47.5" transform="rotate(90 47.75 0.250001)" fill="#2C2D32" stroke="#2C2D32" stroke-width="0.500001"/>
        </svg>
      </div>
      <div class="flex flex-col gap-3/4">
        <div class="flex justify-between items-center gap-1">
          <div class="text-md font-normal font-base text-white-50">
            ROI, %
          </div>
          <div class="text-md font-normal font-base text-white">
            122%
          </div>
        </div>
        <div class="flex justify-between items-center gap-1">
          <div class="text-md font-normal font-base text-white-50">
            Прибыльные сделки
          </div>
          <div class="text-md font-normal font-base text-white">
            78%
          </div>
        </div>
        <div class="flex justify-between items-center gap-1">
          <div class="text-md font-normal font-base text-white-50">
            Статус
          </div>
          <div class="text-md font-normal font-base text-white">
            <span class="flex gap-1/4 items-center">
              <icon-star-fill/>
              ТОП
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>