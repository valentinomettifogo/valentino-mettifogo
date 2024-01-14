import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
// import ContactView from '@/views/ContactView.vue'
import MaintainanceViewVue from '@/views/MaintainanceView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MaintainanceViewVue
      // component: HomeView
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: ContactView
    // },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundView,
    },
  ]
})

export default router
