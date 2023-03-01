<template>
  <div class="hm">
    <div class="home"> 
    <img src="https://i.postimg.cc/02cjsPck/spa-woman-removebg-preview.png">
  </div>
    <div class = "container">
      <div class="typing-word">
  <h1><span>Beauty is a fragile gift.</span></h1>
    </div>
    <div class="word">
  <H2>100% Plant Based Hair & Body Care</H2>
  <button class="click">SHOP NOW</button>
</div>
  
</div>
  </div>
  <!-- <i class="fa fa-quote-left" aria-hidden="true"></i><p>Our Products Are Always Responsibly sourced & Ethically Created.</p> -->

<div class="sub-cards" style="display: flex;width:100%;gap: 5rem;margin-top: 2rem;justify-content: center; transform: translateY(-40%);">
  <div class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/5NyVfZcg/Anti-breakage-Transitioning-combo.png" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">Hair Care</h5>
    <a href="#" style="background-color: lightblue;" class="btn btn-">SHOP NOW</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/mrNG1zMB/body-hero-cream-hover-1-350x.webp" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">Body Care</h5>
    <a href="#" style="background-color: lightblue;" class="btn btn-">SHOP NOW</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/RV5DDySq/Egg-detangling-Brush.jpg" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">Accesories</h5>
    <a href="#" style="background-color: lightblue;" class="btn btn">SHOP NOW</a>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'HomeView',
  components: { 
  }
}
</script>

<style scoped>
.click{
  border-radius: 2px; 
  color: black;
  margin-top: 1rem;
  background-color: #83b5e4;
  border: #83b5e4;
}
.home img{
 width: 600px;
 height: 500px;
 margin-top: 20px;
 margin-left: 3rem;
}
.hm{
  display: flex;
}
.container{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 100px;
}
.container h2{
  font-size: 30px;
  font-weight: 700;
  color: rgb(52, 109, 139);
  margin-top: 20px;
}
.card img{
  height: 60%;
  object-fit: cover;
}
.container {
  height: 100vh;
  /*This part is important for centering*/
  display: grid;
  place-items: center;
}
h1 span{
  color: deeppink;
}

.typing-word {
  width: 31ch;
  animation: typing 2s steps(40), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  /* border-right: 3px solid; */
  font-family: monospace;
  font-size: 2rem;
}
.word{
  transform: translateY(-240%);
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>
