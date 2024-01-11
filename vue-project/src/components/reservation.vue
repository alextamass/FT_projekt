<template>
  <div class="reservation-form">
    <div class="container">
      <form @submit.prevent="confirmReservation">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" v-model="customerName" required>
        </div>

        <div class="form-group">
          <label for="contact">Contact Number:</label>
          <input type="tel" id="contact" v-model="contactNumber" required>
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>

        <div class="form-group">
          <label for="partySize">Party Size:</label>
          <input type="number" id="partySize" v-model="partySize" min="1" required>
        </div>

        <div class="form-group">
          <label for="reservationDate">Reservation Date:</label>
          <input type="datetime-local" id="reservationDate" v-model="reservationDate" required>
        </div>

        <router-link
            v-if="isFormFilled"
            :to="{ name: 'reservation-confirmation', params: { customerName, contactNumber, email, partySize, reservationDate } }"
            class="router-link"
            tag="button"
            type="submit"
        >
          Confirm Reservation
        </router-link>

        <router-link to="/" class="router-link" tag="button">
          Cancel Reservation
        </router-link>
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
      email: '',
      partySize: 1,
      reservationDate: '',
    };
  },
  computed: {
    isFormFilled() {
      return this.customerName && this.contactNumber && this.email && this.partySize > 0 && this.reservationDate;
    },
  },
  methods: {
    confirmReservation() {
      if (this.isFormFilled) {
        console.log('Reservation confirmed:', {
          customerName: this.customerName,
          contactNumber: this.contactNumber,
          email: this.email,
          partySize: this.partySize,
          reservationDate: this.reservationDate,
        });
      }
    },
  },
};
</script>

<style scoped>
.reservation-form {
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

.router-link {
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.router-link:hover {
  background-color: #555;
}
</style>
