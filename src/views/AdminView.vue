<template>
    <div class="header">
        <h1>Users</h1>
    </div>
    <div class="container">
        <div class="row">
            <table class="table">
                <th>FirstName</th>
                <th>LastName</th>
                <th>Gender</th>
                <th>CellphoneNumber</th>
                <th>EmailAdd</th>
                <th>UserRole</th>
                <button>Edit</button>
                <button>Delete</button>
                <tbody>
                    <tr v-for="user in users" :key="user.userID">
                    <td>
                        {{ user.firstName }}
                    </td>
                    <td>
                        {{ user.lastName }}
                    </td>
                    <td>
                        {{ user.gender }}
                    </td>
                    <td>
                        {{ user.cellphoneNumber }}
                    </td>
                    <td>
                        {{ user.emailAdd }}
                    </td>
                    <td>
                        {{ user.userRole }}
                    </td>
                    <td>
                        <img :src="user.userProfile" :alt="user.firstname">
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="header">
        <h1>Products</h1>
    </div>
    <div class="container">
        <div class="row">
            <table class="table">
                <th>ProdName</th>
                <th>Category</th>
                <th>Price</th>
                <th>ProdQuantity</th>
                <tbody>
                    <tr v-for="product in products" :key="product.prodID">
                    <td>
                        {{ product.ProdName }}
                    </td>
                    <td>
                        {{ product.category }}
                    </td>
                    <td>
                        {{ product.price }}
                    </td>
                    <td>
                        {{ product.prodQuantity }}
                    </td>
                    <td>
                        <img :src="product.imgURL" :alt="product.ProdName">
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.header h1{
    color: #1e677f;
    font-weight: 500;
    font-family:'Courier New', Courier, monospace;
}
.table img{
    height: 130px;
}
</style>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
export default{
    setup() {
        const store = useStore();
        store.dispatch("fetchUsers");
        store.dispatch("fetchProducts");
        const users =
        computed( ()=>store.state.users);
        const products =
        computed( ()=>store.state.products)
        return {
           users,
           products
        }
    }
}
</script>
