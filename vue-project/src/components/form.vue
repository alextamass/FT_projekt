<template>
  <div class="order-form">
    <div class="container">
      <h2>Place Your Order</h2>
      <form @submit.prevent="submitOrder">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" v-model="customerName" required>
        </div>

        <div class="form-group">
          <label for="contact">Contact Number:</label>
          <input type="tel" id="contact" v-model="contactNumber" required>
        </div>

        <div class="form-group">
          <label for="orderDetails">Order Details:</label>
          <textarea id="orderDetails" v-model="orderDetails" required></textarea>
        </div>

        <div class="form-group">
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerName: '',
      contactNumber: '',
      orderDetails: '',
    };
  },
  methods: {
    submitOrder() {
      console.log('Order submitted:', {
        customerName: this.customerName,
        contactNumber: this.contactNumber,
        orderDetails: this.orderDetails,
      });
    },
  },
};
</script>

<style scoped>
.order-form {
  padding: 60px 0;
  text-align: center;
}

.container {
  width: 80%;
  margin: 0 auto;
}

form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #555;
}
</style>