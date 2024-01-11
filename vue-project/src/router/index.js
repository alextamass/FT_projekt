import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import OrderFormView from "@/views/OrderFormView.vue";
import OrderPlacedView from "@/views/OrderPlacedView.vue";
import orders from "@/components/orders.vue";
import reservationConfirmation from "@/components/reservation-confirmation.vue";
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
      path: "/order/:dishName/:price/:quantity",
      name: 'order',
      component: OrderFormView,
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
    {
      path: "/reservation",
      name: 'reservation',
      component: reservationConfirmation,
    },
  ]
})

export default router
