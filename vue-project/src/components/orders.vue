<template>
  <div class="orders-section">
    <h2>Your Orders</h2>
    <div class="orders-grid">
      <div
          v-for="(order, orderIndex) in showOrder"
          :key="orderIndex"
          class="order-container"
      >
        <div class="order-details">
          <p class="order-name">{{ order.name }}</p>
          <p class="order-price">{{ order.price }} €</p>
        </div>
        <img :src="order.image" alt="">
        <button @click="deleteOrder(orderIndex)">Remove Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import { orders } from '../stores/orders.js';

export default {
  data() {
    return {
      orders: orders(),
    };
  },
  computed: {
    showOrder() {
      return this.orders.getOrders;
    },
  },
  methods: {
    deleteOrder(index) {
      this.orders.getOrders.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.orders-section {
  text-align: center;
  margin-top: 20px;
}

.orders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.order-container {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  .order-details {
    margin-bottom: 10px;

    .order-name {
      color: black;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .order-price {
      color: black;
      font-size: 14px;
      text-align: center;
    }
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }
}
</style>
