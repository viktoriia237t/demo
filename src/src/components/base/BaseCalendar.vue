<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@/assets/css/calendar.css';
import { uk } from 'date-fns/locale';

import {ref} from "vue";
defineProps({
  format:{
    type:String
  }
})
const date = ref(null);
</script>

<template>
  <div>
    <VueDatePicker
        :format="format"
        :format-locale="uk"
        locale="uk"
        month-name-format="long"
        cancelText="Скасувати"
        selectText="Вибрати"
        :enable-time-picker="false"
        v-model="date"></VueDatePicker>
  </div>


</template>

<style scoped>

</style>