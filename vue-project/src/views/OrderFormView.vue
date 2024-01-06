
<template>
  <div>
    <h2 style="text-align: center">Place Your Order for {{dishName}}</h2>
    <h2 style="text-align: center">Total : {{price}} €</h2>
    <OrderForm/>
  </div>
</template>

<script>
import OrderForm from "@/components/form.vue";

export default {
  components: {
    OrderForm,
  },
  props: ['dishName', 'price'],

};
</script>

