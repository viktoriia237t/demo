import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuStore', {
    state: () => ({
        shown: true
    }),
    actions: {
        menuToggle() {
            this.shown = !this.shown
        }
    },
    persist: true
})