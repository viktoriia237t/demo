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
        {{ checked ? "Dark": "Light" }}
      </div>
    </div>
    <label class="switch">
    <input type="checkbox"
           v-bind="$attrs"
           class="input"
           :checked="checked"
           @change="checked = $event.target.checked">
    <div class="slider border-1 round"
         :class="{
      'bg-white border-white': !checked,
      'bg-primary-100 border-primary-40': checked

    }">
      <svg class="top-3/8 left-1/2 relative" v-if="checked" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66675 1.33399C5.98829 1.33292 5.31371 1.43635 4.66675 1.64066C6.02036 2.06605 7.20294 2.91221 8.04248 4.05606C8.88201 5.19991 9.3347 6.58178 9.3347 8.00066C9.3347 9.41954 8.88201 10.8014 8.04248 11.9453C7.20294 13.0891 6.02036 13.9353 4.66675 14.3607C5.58345 14.6487 6.55161 14.7353 7.50487 14.6143C8.45813 14.4933 9.37397 14.1676 10.1896 13.6597C11.0053 13.1517 11.7015 12.4734 12.2306 11.6713C12.7597 10.8692 13.1091 9.96213 13.2549 9.01235C13.4007 8.06257 13.3395 7.09249 13.0754 6.16858C12.8114 5.24467 12.3507 4.38876 11.725 3.6595C11.0993 2.93024 10.3233 2.34486 9.45023 1.94347C8.57717 1.54209 7.62766 1.33418 6.66675 1.33399Z" fill="white"/>
      </svg>
      <svg class="top-3/8 left-1/2 relative" v-if="!checked" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99996 12.0009C6.9391 12.0009 5.92168 11.5795 5.17153 10.8294C4.42139 10.0792 3.99996 9.0618 3.99996 8.00094C3.99996 6.94007 4.42139 5.92266 5.17153 5.17251C5.92168 4.42236 6.9391 4.00094 7.99996 4.00094C9.06083 4.00094 10.0782 4.42236 10.8284 5.17251C11.5785 5.92266 12 6.94007 12 8.00094C12 9.0618 11.5785 10.0792 10.8284 10.8294C10.0782 11.5795 9.06083 12.0009 7.99996 12.0009ZM13.3333 10.2076L15.54 8.00094L13.3333 5.79427V2.6676H10.2066L7.99996 0.460938L5.79329 2.6676H2.66663V5.79427L0.459961 8.00094L2.66663 10.2076V13.3343H5.79329L7.99996 15.5409L10.2066 13.3343H13.3333V10.2076Z" fill="white"/>
      </svg>
    </div>
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
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 4px;
  bottom: 4px;
  background-color: #595C6D;
  transition: 0.4s;
}
input:checked + .slider svg{
  transform: translateX(30px);
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