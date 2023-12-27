<script setup>
import {useMenuStore} from "@/stores/menuStore";
import NavItemLink from "@/components/layout/NavItemLink.vue";
import IconLive from "@/components/icons/IconLive.vue";
import IconStatistic from "@/components/icons/IconStatistic.vue";
import IconUsers from "@/components/icons/IconUsers.vue";
import IconChart from "@/components/icons/IconChart.vue";
import IconSupport from "@/components/icons/IconSupport.vue";
import IconDivideAside from "@/components/icons/IconDivideAside.vue";
import ListAside from "@/components/traders/ListAside.vue";

const menu = useMenuStore()

</script>

<template>
  <aside
      class="bg-aside relative h-dynamic-screen transition-width duration-700 flex flex-col overflow-y-auto"
      :class="{
            'w-290 min-w-290': menu.shown,
            'w-88 min-w-88': !menu.shown
      }">
    <div class="px-2 py-3 border-b-1 border-primary-40 w-full h-fit-content cursor-pointer" @click="() => menu.menuToggle()">
      <div class="text-2 text-white font-primary">
        <span class="font-bold">S</span>
        <span class="font-normal">T</span>
      </div>
    </div>
    <div class="py-3 pl-1-1/2"
         :class="{
            'pr-0': menu.shown,
            'pr-1-1/2': !menu.shown,
          }">
      <router-link to="/live">
        <nav-item-link>
          <template #icon>
            <icon-live/>
          </template>
          Live Trading
        </nav-item-link>
      </router-link>
      <router-link to="/">
        <nav-item-link>
          <template #icon>
            <icon-statistic/>
          </template>
          Статистика
        </nav-item-link>
      </router-link>
      <router-link to="/traiders">
        <nav-item-link>
          <template #icon>
            <icon-users/>
          </template>
          Трейдера
        </nav-item-link>
      </router-link>
      <router-link to="/market">
        <nav-item-link>
          <template #icon>
            <icon-chart/>
          </template>
          Рынок
        </nav-item-link>
      </router-link>
      <router-link to="/support">
        <nav-item-link>
          <template #icon>
            <icon-support/>
          </template>
          Поддержка
        </nav-item-link>
      </router-link>
    </div>
    <div class="px-1-1/2">
      <icon-divide-aside/>
    </div>
    <div class="py-3 px-1-1/2 flex">
      <list-aside></list-aside>
    </div>


  </aside>
</template>

<style scoped>

</style>