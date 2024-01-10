<script setup>


const props = defineProps({
  imageName:{
    type: String
  },
  name: {
    type: String
  },
  fillBg:{
    default: true,
    type:Boolean
  }
})

function getImageUrl(name) {
  return new URL(`../../assets/images/coins/${props.imageName}.png`, import.meta.url).href
}

</script>

<template>
  <div class="rounded-1/8 gap-1/2 flex items-center w-fit-content"
  :class="{
    'bg-white-5 py-1/4 px-1/2 ': fillBg,
    'bg-transparent': !fillBg
  }">
    <span>
      <img :src="getImageUrl(imageName)" alt="" class="w-12 h-12 min-w-12">
    </span>
    <span class="text-sm text-white font-normal font-base uppercase">
      {{ name }}
    </span>
  </div>
</template>

<style scoped>

</style>