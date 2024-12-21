import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/category/:name',
      name: 'category',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/recipe/:id',
      name: 'RecipeDetail',
      component: () => import('../views/RecipeDetail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
