

<template>
  <section>
      <router-link to="/">Home</router-link>
      <router-link v-for="category in categories" :key="category.id" :to="{name:'category', params : { slug:category.slug}}">{{category.name}}</router-link>
    <img src="https://img.freepik.com/free-vector/flat-design-asian-food-twitter-header_23-2150001957.jpg?w=1380&t=st=1704555499~exp=1704556099~hmac=7160015114900058387f82c0d9d619f0e7a49a332bb5dfd3b75f0fe94077af52" alt="" style="width: 85%">
    <h2 style="color: orange">Asian Cuisine Alex</h2>
  </section>
</template>

<script>
import categories from '../categories.json';
export default {
  data(){
    return{
      name:'navbar',
      categories:categories.category,
    }
  }
}
</script>

<style scoped>

</style>