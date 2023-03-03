<template>
   <div class="add">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add new 
</button>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Users</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">firstName</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">lastName</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Gender</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">CellphoneNumber</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">EmailAdd</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
        </div>
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
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
                <th>userProfile</th>
                <th>Edit</th>
                <th>Delete</th>
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
                    <td>
                        <button class="btn btn-primary">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-dark">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="add">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add new 
</button>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Products</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">prodName</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Category</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Price</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">prodQuantity</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
        </div>
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
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
                    <td>
                        <button class="btn btn-primary">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-dark">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.add{
    margin-top: 20px;
    float: right;
}
.header h1{
    color: #1e677f;
    font-weight: 500;
    font-family:'Courier New', Courier, monospace;
    font-size: 50px;
    margin-top: 30px;
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
