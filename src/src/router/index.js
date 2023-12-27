import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'statistics',
      component: () => import('../views/Statistics.vue')
    }
  ],
  linkActiveClass: "active",
  linkExactPathActiveClass: "active",
})

export default router
