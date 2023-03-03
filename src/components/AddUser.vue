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
    <div class="View">
<img :src="user.imgURL" alt="" srcset="">
<div>
   <h1>{{ user.firstName }}</h1> 
   <h3>{{ user.lastName }}</h3>
   <p>{{ user.gender }}</p>
   <p aria-disabled="true">{{user.userRole }}</p>
</div>
    </div>
</template>

<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
export default{
    setup() {
        const store = useStore();
        store.dispatch("fetchUsers");
        const user =
        computed( ()=>store.state.user);
        return {
           user
        }
    }
}
</script>