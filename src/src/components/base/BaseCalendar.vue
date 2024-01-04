<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@/assets/css/calendar.css';

import {ref} from "vue";

const date = ref(null);
</script>

<template>
  <div>
    <VueDatePicker
        :enable-time-picker="false"
        v-model="date"></VueDatePicker>
  </div>


</template>

<style scoped>

</style>