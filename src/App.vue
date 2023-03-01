<template>
<div class="background">
  <NavBarComp/> 
   <router-view/>
  <FooterComp/>
</div>
 </template>

 <script>
 import NavBarComp from './components/NavBarComp.vue';
 import FooterComp from './components/FooterComp.vue';
 export default {
  components: {
    NavBarComp,
    FooterComp
  }
 }
</script>
 

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #090909;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: deeppink;
}

</style>
