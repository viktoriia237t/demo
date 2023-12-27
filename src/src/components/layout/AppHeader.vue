<script setup>
import IconSettings from "@/components/icons/IconSettings.vue";
import IconNotification from "@/components/icons/IconNotification.vue";
import InputSearch from "@/components/base/InputSearch.vue";
import IconNotificationIndicator from "@/components/icons/IconNotificationIndicator.vue";
import IconUser from "@/components/icons/IconUser.vue";
</script>

<template>
  <header class="bg-primary-100 border-b-1 border-primary-40 h-68 min-h-68 flex items-center">
    <div class="flex justify-between items-center w-full h-full">
      <div class="divide-x-1 divide-primary-40 flex items-center h-full">
        <div class="px-1-1/2 h-full flex items-center">
          <slot>

          </slot>
        </div>
        <div class="px-1-1/2 h-full flex items-center">
          <input-search/>
        </div>
      </div>
      <div class="divide-x-1 divide-primary-40 h-full flex items-center">
        <div class="flex items-center gap-1/2 px-1-1/2">
          <div class="text-md font-base font-normal text-white">
            Danil Bekenyov
          </div>
          <div>
            <icon-user class="h-24 w-24 min-w-24"/>
<!--            <img src="" alt="" class="h-24 w-24 min-w-24">-->
          </div>
        </div>
        <div class=" flex items-center px-1-1/2 gap-1 h-full">
          <div class="cursor-pointer border-1 border-primary-40 p-1/2 ">
            <!--            <icon-notification class="h-16 w-16 min-w-16"/>-->
            <icon-notification-indicator class="h-16 w-16 min-w-16"/>
          </div>
          <div class="cursor-pointer border-1 border-primary-40 p-1/2">
            <icon-settings class="h-16 w-16 min-w-16"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>