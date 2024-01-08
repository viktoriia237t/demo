<script setup>
defineProps({
  size: {
    default: '32'
  },
  status: {
    default: 'online'
  }
})
</script>

<template>
  <div class="rounded-full relative bg-primary-30 grid place-items-center "
  :class="{
    'h-32 w-32 min-w-32 text-xs' : size === '32',
    'h-72 w-72 min-w-72 text-1-1/2' : size === '72'
  }">
    <span class="opacity-50">01</span>
    <span v-if="status === 'online'" class="absolute right-0 bottom-0">
        <span class="bg-green h-8 w-8 min-w-8 rounded-full border-2 border-primary-90 block"></span>
    </span>
  </div>
</template>

<style scoped>

</style>