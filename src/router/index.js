import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
// import ContactView from '@/views/ContactView.vue'
import MaintainanceViewVue from '@/views/MaintainanceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MaintainanceViewVue
    },
    {
      path: '/contact',
      name: 'contact',
      component: MaintainanceViewVue
    }
  ]
})

export default router
