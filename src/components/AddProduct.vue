<template>
    <div class="View">
<img :src="product.imgURL" alt="" srcset="">
<div>
   <h1>{{ product.prodName }}</h1> 
   <h3>{{ product.price }}</h3>
   <p>{{ product.prodDescription }}</p>
   <p aria-disabled="true">{{product.prodQuantity }}</p>
</div>
    </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
export default{
    setup() {
        const store = useStore();
        store.dispatch("fetchProducts");
        const product =
        computed( ()=>store.state.product);
        return {
           product
        }
    }
}
</script>