

<template>
  <div id="main-nav" class="collapse navbar-collapse">
    <div class="nav navbar-nav">
      <router-link to="/">Home</router-link>
      <router-link v-for="category in categories" :key="category.id" :to="{name:'category', params : { slug:category.slug}}">{{category.name}}</router-link>
    </div>
  </div>
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