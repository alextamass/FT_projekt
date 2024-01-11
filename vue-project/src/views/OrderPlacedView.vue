<template>
  <div class="thank-you">
    <h2>Thank You for Your Purchase!</h2>
    <p>Your order has been successfully placed.</p>
    <router-link to="/orders" class="nav-link">View Orders</router-link>
    <router-link to="/" tag="button" class="home-button">Back to Home</router-link>
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

.nav-link {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
}

.home-button {
  display: block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #0056b3;
}
</style>
