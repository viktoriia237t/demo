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
  percent: {
    type: Boolean,
    default: false
  }
})

const numberValue =  new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(props.value);

</script>

<template>
  <span class="font-base uppercase"
        :class="{
      'text-sm': size === 'sm',
      'text-md': size === 'md',
      'text-red': props.value < 0,
      'text-green': props.value > 0,
      'font-bold': fontBold,
      'font-normal': !fontBold
    }"
  >
    {{ numberValue }} <span v-if="!percent">$</span> <span v-if="percent">%</span>
  </span>
</template>

<style scoped>

</style>