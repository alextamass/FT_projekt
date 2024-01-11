import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import food from '../food.json'

export const orders = defineStore('orders', {
  state: () => ({
    orders: [],
    foods: food,
  }),
  getters:{
    getProductId: (state) => (productId) => {
      return state.foods.find(food => food.id === productId);
    },
    getOrders (){
      return this.orders;
    }
  },
  actions:{
    addOrder(productID){
      if(this.getProductId(productID)) {
        this.orders.push(this.getProductId(productID))
        console.log(this.orders)
      }
      else{
        console.log(`Product was not found ${productID}`)
      }

    }
  }
});
