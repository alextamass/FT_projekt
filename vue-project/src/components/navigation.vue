<template>
  <section>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link
        v-for="category in categories"
        :key="category.id"
        :to="{ name: 'category', params: { slug: category.slug } }"
        class="nav-link"
    >{{ category.name }}</router-link>
    <router-link to="/orders" class="nav-link">View Orders</router-link>
  </section>
</template>

<script>
import categories from '../categories.json';

export default {
  data() {
    return {
      name: 'navbar',
      categories: categories.category,
    };
  },
};
</script>

<style scoped>
section {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

.nav-link {
  font-size: 18px;
  color: white;
  text-decoration: none;
  margin: 0 20px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>