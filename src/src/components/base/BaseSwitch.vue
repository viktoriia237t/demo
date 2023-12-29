<script setup>
import {ref} from "vue";

defineProps({
  label: {
    type: String,
    default : ''
  }
})
const checked = ref(false);

</script>

<template>
  <div class="flex justify-between item-center">
    <div>
      <div class="text-lg text-white opacity-30 font-light font-base">
        {{label}}
      </div>
      <div class="text-xl text-white font-normal font-base">
        {{ checked ? "Вкл.": "Выкл." }}
      </div>
    </div>
    <label class="switch">
    <input type="checkbox"
           v-bind="$attrs"
           class="input"
           :checked="checked"
           @change="checked = $event.target.checked">
    <div class="slider round"></div>
  </label>

  </div>

</template>

<style scoped>

.switch {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 32px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4D4D4D;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #40C964;;
}

input:focus + .slider {
  box-shadow: 0 0 1px  #40C964;;
}

input:checked + .slider:before {
  transform: translateX(30px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>