<template>
    <h2><span>P</span>roducts</h2>
    <div class="container">
    <div class="row">
      <div class="col-6 col-sm-4 " v-for="product in products" :key="product.prodID">
          <div class="card" >
            <img v-bind:src="product.imgURL" class="card-img-top" alt="product" >
            <div class="card-body">
              <h5 style="font-family: 'Courier New', Courier, monospace; font-weight: bold;" class="card-title">{{product.ProdName}}</h5>
              <h5 style="font-family: 'Courier New', Courier, monospace;" class="card-title">{{product.category}}</h5>
              <h5 style="font-family: 'Courier New', Courier, monospace; font-weight: 900;" class="card-title">R{{product.price}}</h5>
              <a href="#" class="btn btn-dark">More details</a>
            </div>
          </div>
          </div>
    </div>
</div>
</template>

<style scoped>
h2 span{
    color: deeppink;
    font-size:5rem;
}
.card{
    width: 400px;
    margin-top: 20px;
}
.card img{
   height: 360px;
   object-fit: cover;
}
</style> 
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
export default{
    setup() {
        const store = useStore();
        store.dispatch("fetchProducts");
        const products =
        computed( ()=>store.state.products);
        return {
           products
        }
    }
}
</script> 