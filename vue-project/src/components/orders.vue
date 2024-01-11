<template>
  <div v-for="(order, orderIndex) in showOrder" :key="orderIndex" class="order-container">
    <div v-for="(item, itemIndex) in order" :key="itemIndex" class="order-item">
      <div class="order-item-details">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>



<script>
import {orders} from '../stores/orders.js'
export default {
  data() {
    return {
      orders: orders()
    };
  },
  computed: {
    showOrder(){
      return this.orders.getOrders;
    }
  }
}
</script>

<style scoped>

</style>