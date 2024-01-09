
<template>

  <section>
    <h2>Welcome to Our Asian Cuisine Experience</h2>
    <p>Discover the flavors of Asia at our restaurant. We offer a diverse menu of delicious and authentic dishes prepared with care and expertise.</p>
    <a href="#" class="cta-button">Explore Our Menu</a>
  </section>

  <section>
    <h2>Our Specialties</h2>
    <p>Indulge in our exquisite Asian specialties crafted by our skilled chefs. From savory appetizers to delightful main courses, we have something for every palate.</p>
  </section>

  <section>
    <h2>Visit Us Today</h2>
    <p>Experience the rich and vibrant flavors of Asian cuisine. Visit our restaurant and embark on a culinary journey that will leave your taste buds delighted.</p>
    <a href="#" class="cta-button">Make a Reservation</a>
  </section>


</template>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

nav {
  background-color: #444;
  padding: 10px 0;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #555;
}

section {
  padding: 60px 20px;
  text-align: center;
  color: orange;
}

h2 {
  color: orange;
  font-size: 36px;
  margin-top: 10px;
}

p {
  color: darkorange;
  font-size: 16px;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #555;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}
</style>
<script setup>
import Navigation from "@/App.vue";
</script>