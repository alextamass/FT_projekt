<template>
  <div>
    <div class="reservation-confirmation">
      <h2>Reservation Confirmed</h2>
      <p><strong>Customer Name:</strong> {{ customerName }}</p>
      <p><strong>Contact Number:</strong> {{ contactNumber }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Party Size:</strong> {{ partySize }}</p>
      <p><strong>Reservation Date:</strong> {{ reservationDate }}</p>
    </div>
    <router-link to="/" class="back-to-home-link">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "reservation-confirmation",
  props: ['customerName', 'contactNumber', 'email', 'partySize', 'reservationDate'],
};
</script>

<style scoped>
.reservation-confirmation {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
}

p {
  margin: 10px 0;
}

strong {
  font-weight: bold;
  color: #555;
}

.back-to-home-link {
  display: block;
  margin-top: 20px;
  background-color: #007BFF;
  text-align: center;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.back-to-home-link:hover {
  background-color: #0056b3;
}
</style>
