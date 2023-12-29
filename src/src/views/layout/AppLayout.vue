<script setup>

import AppAside from "@/components/layout/AppAside.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppMain from "@/components/layout/AppMain.vue";
import BaseSidebar from "@/components/base/BaseSidebar.vue";
</script>

<template>
  <div class="flex h-dynamic-screen w-full ">
    <AppAside>
    </AppAside>
    <div class="w-full h-dynamic-screen">
      <AppHeader>
        <slot name="header">

        </slot>
      </AppHeader>
      <AppMain>
        <slot>

        </slot>
      </AppMain>
    </div>
  </div>


</template>

<style scoped>

</style>