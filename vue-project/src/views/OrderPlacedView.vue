<template>
  <div class="thank-you">
    <h2>Thank You for Your Purchase!</h2>
    <p>Your order has been successfully placed.</p>
    <router-link to="/" tag="button">Back to Home</router-link>
  </div>
</template>


<script>

export default {
  name: "OrderPlacedView",
}
</script>



<style scoped>
.thank-you {
  text-align: center;
  padding: 20px;
}

button {
  margin-top: 20px;
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