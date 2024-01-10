<template>
  <div>
    <h2 style="text-align: center">Place Your Order for {{ dishName }}</h2>
    <h2 style="text-align: center">Quantity : {{ quantity }}</h2>
    <h2 style="text-align: center">Total : {{ totalPrice }} €</h2>
    <OrderForm/>
  </div>
</template>

<script>
import OrderForm from "@/components/form.vue";

export default {
  components: {
    OrderForm,
  },
  props: ['dishName', 'price', 'quantity'],
  computed: {
    totalPrice() {
      return (this.price * this.quantity).toFixed(2);
    },
  },
};
</script>