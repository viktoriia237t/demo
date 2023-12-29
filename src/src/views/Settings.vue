<script setup>
import AppLayout from "@/views/layout/AppLayout.vue";
import SettingsPageImage from "@/components/settings/SettingsPageImage.vue";
import SettingsFormChangePhoto from "@/components/settings/SettingsFormChangePhoto.vue";
import SettingsFormPersonalInfo from "@/components/settings/SettingsFormPersonalInfo.vue";
import SettingsFormSettiingSystem from "@/components/settings/SettingsFormSettiingSystem.vue";
</script>

<template>
  <AppLayout>
    <template #header>
      <div class="text-lg text-white font-base font-bold">
        Настройки
      </div>
    </template>

    <div class="relative h-full">
      <settings-page-image/>
      <settings-form-change-photo/>
      <div class="mt-[152px] divide-primary-40 divide-x-1 grid grid-cols-2 h-full">
        <div class=" pt-[76px]">
          <settings-form-personal-info/>
        </div>
        <div class=" pt-[76px]">
          <settings-form-settiing-system/>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
