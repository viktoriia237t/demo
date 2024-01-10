<script setup>

defineProps({
  grid: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div class="px-3/4 flex justify-between gap-3/4 text-sm font-base font-normal text-white-30 ">
    <div v-for="(item, key) in grid"
         class="last:text-right pb-3/4"
         :class="grid[key].width">
      <span v-if="key ===  'volume'" class="flex items-center gap-1/4">
        {{ item.title }}
        <span class="cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66699 9.33301L8.00033 12.6663L11.3337 9.33301H4.66699Z" fill="white" fill-opacity="0.3"/>
            <path d="M8.00033 3.33301L4.66699 6.66634H11.3337L8.00033 3.33301Z" fill="white" fill-opacity="0.5"/>
          </svg>
        </span>
      </span>
      <span v-else>
        {{ item.title }}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>