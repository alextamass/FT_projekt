import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import OrderPlacedView from "@/views/OrderPlacedView.vue";
import orders from "@/components/orders.vue";
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
      path: "/orderplaced",
      name: 'orderplaced',
      component: OrderPlacedView,
    },
    {
      path: "/orders",
      name: 'orders',
      component: orders,
    },

  ]
})

export default router
