<script setup>

import {ref} from "vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import {Transition} from "vue";

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    default: false
  },
  errors: {
    type: Object,
    default: null
  },
  options: {
    type: Array,
    default: ['']
  },
  selectedOption: {
    type: String,
    default: 'select an option',
  }
})

const showDropdown = ref(false);

let selected = ref(props.selectedOption);

const selectOption = (option)  => {
  selected.value = option;
  emit('language', selected)
}

const emit = defineEmits(['language'])
</script>

<template>

  <div class="flex items-center w-full">
    <div class="flex flex-col gap-1/4 w-full">
      <label for="" class="text-lg text-white opacity-30 font-light font-base ">
        {{ label }}
      </label>
      <div class="vue-select w-full text-white cursor-pointer text-lg font-base" @click="showDropdown = !showDropdown">
        <span class="selected-option w-full bg-transparent text-xl text-white font-normal font-base">
          {{ selected }}
        </span>
        <transition name="slide">
          <div class="dropdown-options-container w-[200px] absolute bg-primary-80 z-2 border-primary-40 border-1" v-if="showDropdown">
            <div class="dropdown-options divide-primary-40 divide-y-1 " v-for="option in options">
              <div class="dropdown-options--cell text-white p-3/4 tex-sm hover:bg-[rgba(255,255,255,0.06)]"
                   @click="selectOption(option)">
                <span class="option-text">
                  {{ option }}</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="w-24 h-24 min-w-24 cursor-pointer text-primary-30" @click="showDropdown = !showDropdown">
      <icon-arrow-right/>
    </div>
  </div>
</template>

<style scoped>

</style>