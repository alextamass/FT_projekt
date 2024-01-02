<template>
     <h1>category name: {{ $route.params.slug }}</h1>

     <div v-for="(food, index) in selectedCategory" :key="index">
      <h2>{{ food.name }}</h2>
      <img :src="food.image" :alt="food.name" style="width: 35%;">
      <h3>Price: {{ food.price }}</h3>
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
      foods: food
    };
  }
}
</script>