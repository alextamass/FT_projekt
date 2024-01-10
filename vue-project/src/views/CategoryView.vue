<template>
  <div>
    <h1>{{ $route.params.slug }}</h1>

    <div class="food-grid">
      <div v-for="(food, index) in selectedCategory" :key="index" class="food-item">
        <h2 class="food-name">{{ food.name }}</h2>
        <img :src="food.image" :alt="food.name" class="food-image">
        <h3 class="food-price">Price: {{ food.price }}</h3>
        <p class="food-description">{{ loremIpsum }}</p>

        <div class="order-section">
          <div class="quantity-selector">
            <label for="quantity" style="color: black">Quantity: </label>
            <input type="number" id="quantity" v-model="food.quantity" min="1" placeholder="1">
          </div>

          <router-link :to="{ name: 'order', params: { dishName: food.name, price: food.price, quantity: food.quantity || 1 } }" tag="button" class="order-button">
            Place Order
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import food from '../food.json';

export default {
  computed: {
    selectedCategory() {
      const categorySlug = this.$route.params.slug;
      return this.foods.filter(food => food.category === categorySlug);
    }
  },
  data() {
    return {
      foods: food,
      loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac facilisis odio. Nullam facilisis turpis quis risus ultricies, eget eleifend ligula cursus.'
    };
  }
}
</script>

<style scoped>
.food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.food-item {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.food-name {
  color: black;
  margin-bottom: 8px;
}

.food-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.food-price {
  color: black;
  margin-top: 8px;
}

.food-description {
  color: #666;
  margin-top: 8px;
}

.order-section {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.quantity-selector {
  margin-top: 8px;
  margin-right: 10px;
}

#quantity {
  width: 40px;
  text-align: center;
}

.order-button {
  color: white;
  background-color: #007bff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
}
</style>
