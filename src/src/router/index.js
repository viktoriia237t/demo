import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            children: [
                {
                path: '/',
                name: 'statistics',
                component: () => import('../views/Statistics.vue')
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('../views/Settings.vue')
                },
                {
                    path: '/live',
                    name: 'live',
                    component: () => import('../views/Live.vue')
                },
                {
                    path: '/traders',
                    name: 'traders',
                    component: () => import('../views/Traders.vue')
                },
                {
                    path: '/support',
                    name: 'support',
                    component: () => import('../views/Support.vue')
                },
                {
                    path: '/market',
                    name: 'market',
                    component: () => import('../views/Market.vue')
                },
            ]
        }
    ],
    linkActiveClass: "active",
    linkExactPathActiveClass: "active",
})

export default router
