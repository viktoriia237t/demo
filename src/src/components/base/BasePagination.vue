<template>
  <div class="flex items-center gap-1">
    <div class="text-sm font-base font-normal text-white opacity-50">
      Страница
    </div>
    <div class="opacity-30 min-w-12 cursor-pointer hover:opacity-100 transition duration-400">
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 9.5L7.5 3.5L4 6.5L7.5 9.5Z" fill="white"/>
      </svg>

    </div>
    <div class="bg-primary-35 rounded-full h-24 w-24 min-w-24 text-md text-white grid place-items-center">
      1
    </div>
    <div class="opacity-100 min-w-12 cursor-pointer hover:opacity-30 transition duration-400">
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 9.5L4.5 3.5L8 6.5L4.5 9.5Z" fill="white"/>
      </svg>
    </div>

    <input type="text" placeholder="30" class="bg-transparent text-sm font-base font-normal text-white placeholder:opacity-50
    py-1/4 border-b-1 border-primary-35 text-center outline-none w-34 min-w-34">

  </div>
</template>
<script setup>
</script>