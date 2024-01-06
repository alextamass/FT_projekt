import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import OrderFormView from "@/views/OrderFormView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"Home",
      component:HomeView

    },
    {
      path: '/category/:slug',
      name: 'category',
      component: CategoryView,
      props: true,

    },
    {
      path: '/OrderFormView',
      name: 'order',
      component: OrderFormView,
      props: true,

    },
  ]
})

export default router
