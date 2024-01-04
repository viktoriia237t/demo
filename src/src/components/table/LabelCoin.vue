<script setup>


const props = defineProps({
  imageName:{
    type: String
  },
  name: {
    type: String
  },
})

function getImageUrl(name) {
  return new URL(`../../assets/images/coins/${props.imageName}.png`, import.meta.url).href
}

</script>

<template>
  <div class="bg-white-5 rounded-1/8 px-1/2 gap-1/2 flex items-center py-1/4 w-fit-content">
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