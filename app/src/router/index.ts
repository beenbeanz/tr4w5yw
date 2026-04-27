import StartPage from '@/views/StartPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
      path: '/',
      name: 'home',
      component: StartPage
    },
  ],
})

export default router
