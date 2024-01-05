<script setup>


const props = defineProps({
  value: {
    type: Number
  },
  size:{
    type: String,
    default: 'sm'
  },
  fontBold: {
    type: Boolean,
    default: true
  },
})

const numberValue =  new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(props.value);

</script>

<template>
  <span class="text-sm  font-base uppercase"
        :class="{
      'text-sm': size === 'sm',
      'text-md': size === 'md',
      'text-red': props.value < 0,
      'text-green': props.value > 0,
      'font-bold': fontBold,
      'font-normal': !fontBold
    }"
  >
    {{ numberValue }} $
  </span>
</template>

<style scoped>

</style>