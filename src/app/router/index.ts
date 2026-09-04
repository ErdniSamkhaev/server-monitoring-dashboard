import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        { path: '/', name: 'dashboard', component: () => import('@/pages/DashboardPage.vue') },
        { path: 'servers', name: 'servers', component: () => import('@/pages/ServersPage.vue') },
        {
          path: 'servers/:id',
          name: 'server',
          component: () => import('@/pages/ServerDetailPage.vue'),
        },
      ],
    },

    { path: '/login', name: 'login', component: () => import('@/pages/LoginPage.vue') },
  ],
})

export default router
