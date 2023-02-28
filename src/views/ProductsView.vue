<template>
    <h2><span>P</span>roducts</h2>
<div class="sub-NavBar">
    <ul class="nav justify-content-center">
  <li class="nav-item">
   <router-link to="/face">Face</router-link>
  </li>
  <li class="nav-item">
   <router-link to="/body">Body</router-link>
  </li>
  <li class="nav-item">
  <router-link to="hair">Hair</router-link>
  </li>
  <li class="nav-item">
  <router-link to="gifts">Gifts</router-link>
  </li>
</ul>
</div>
</template>
<style scoped>

h2 span{
    color:chocolate;
    font-size:5rem;
}
.sub-NavBar .nav-item{
margin-left:1rem;


}
.sub-NavBar a{
    text-decoration: none; 
}
</style>