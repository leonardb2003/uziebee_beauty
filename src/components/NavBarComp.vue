<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="slogan">
    <img src="https://i.postimg.cc/cJk73b3h/2.jpg">
  </div>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span>U</span>zieBee <span>B</span>eauty</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <i class="fa fa-home" aria-hidden="true"></i><router-link to ="/"> Home   </router-link>       
        </li>
        <li class="nav-item">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i><router-link to ="/products"> Products   </router-link>     
        </li>
        <li class="nav-item ">
          <i class="fa fa-lock" aria-hidden="true"></i><router-link to ="/admin"> Admin   </router-link>       
        </li>
        <li class="nav-item ">
          <i class="fa fa-user" aria-hidden="true"></i><router-link to ="/login"> Login </router-link>
        </li>
        <li class="nav-item ">
          <i class="fa fa-user-plus" aria-hidden="true"></i><router-link to ="/register"> Register   </router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
.slogan img{
  width: 50px;
} 
.nav-item{
  margin-left: 50px;
}

.navbar-brand span{
  color: #80573b;


}

</style>