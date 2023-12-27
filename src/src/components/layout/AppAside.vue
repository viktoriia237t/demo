<script setup lang="ts">
import {useMenuStore} from "@/stores/menuStore";

const menu = useMenuStore()
</script>

<template>
  <aside
      class="bg-white border-r-1 border-primary-40 relative h-dynamic-screen transition-width duration-700 hidden desktop:flex "
      :class="{
            'w-260 min-w-260': menu.shown,
            'w-88 min-w-88': !menu.shown
          }"
  >
    Aside
    linear-gradient(90deg, #15161B 0%, #22232B 100%)
  </aside>
</template>

<style scoped>

</style>