<script setup>
import {Transition} from "vue";

defineProps({
  modalOpen: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['closeSidebar']);
emit('closeSidebar')
</script>

<template>

  <teleport to="body">
    <Transition name="slide-fade">
      <div v-if="modalOpen" @click="$emit('closeSidebar')"
           class="modal absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center bg-primary-070">
        <div class="right flex flex-col bg-sidebar h-dynamic-screen w-368 ">
          <div @click="$emit('closeSidebar')" class="mx-1-1/2 mt-1-1/2 pb-2 border-b-1 border-primary-40">
            <slot name="header">

            </slot>
          </div>
          <div class="p-1-1/2 pt-2">
            <slot>

            </slot>
          </div>

        </div>
      </div>
    </Transition>
  </teleport>

</template>

<style scoped>
.modal {
  backdrop-filter: blur(12px);
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>