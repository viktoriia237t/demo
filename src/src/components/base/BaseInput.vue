<script setup>

import IconEdit from "@/components/icons/IconEdit.vue";
import {ref} from "vue";

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  disabled: {
    default: false
  },
  id:{
    default: Date.now()
  },
  errors: {
    type: Object,
    default: null
  },
  required:{
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
  },
})

const handleInput = (event) => {
  const oldValue = props.value;
  const newValue = event.target.value;

  props.value = newValue;

  emit('update:value', newValue, oldValue);
};

const emit = defineEmits(['update:value']);

const editField = ref(false);

</script>

<template>

  <div class="flex items-center w-full">
    <div class="flex flex-col gap-1/4 w-full">
      <label for="" class="text-lg text-white opacity-30 font-light font-base ">
        {{ label }}
      </label>
      <div v-if="!editField" class="w-full bg-transparent text-xl text-white font-normal font-base">
        {{ value }}
      </div>
      <div v-if="editField">
        <input
            @input="$emit('update:value', $event.target.value)"
            type="text"
            :value="value"
            class="w-full bg-transparent text-xl text-white font-normal font-base outline-none">
      </div>
    </div>
    <div class="w-24 h-24 min-w-24 cursor-pointer" @click="editField = !editField;">
      <icon-edit/>
    </div>
  </div>
</template>

<style scoped>

</style>