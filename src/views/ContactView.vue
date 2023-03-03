<template>
  <header>
<div class="name">
    <h1>Contact Us</h1>
  </div> 
</header>
<main>
    <div class="container">
      <div class="info">
                      <div class="address">
                        <i class="fa fa-map-marker" aria-hidden="true" ></i>
                        <h4>Location:</h4>
                        <p>6 Skepe Square,Factreton Avenue</p>
                      </div>
                      <div class="email">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <h4>Email:</h4>
                        <p>beyonceleonard65@gmail.com</p>
                      </div>
                      <div class="phone">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <h4>Call:</h4>
                        <p>+27 6179 275 89</p>
                      </div>
                    </div>

                    <div class="header">
                  <form action="https://formspree.io/f/xlevpezg" method="post" role="form" class="formspree-form">
                    <label for="text">Name</label>
                    <input type="text" name="name" class="form-control" placeholder="Your Name" required>
                    <label for="email">Enter your email address</label>
                    <input type="email" name="email" class="form-control" placeholder="Your Email" required>
                    <label for="text">Provide a message</label>
                    <input type="text" name="message" class="form-control" placeholder="Message" required>
                    <div class="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div> 
                  </div> 
              
    
  </main>
</template>

<style scoped>
.container{
  display: flex;
}
.info{
    padding: 30px;
    width: 300px;
    height: 400px;
    border-radius: 5px;
    box-shadow: 0 0 24px 0 rgba(0,0,0,0.12);
} 
 .info i{
    font-size: 20px;
    color: #149ddd;
    float: left;
    width: 44px;
    height: 44px;
    background: #dff3fc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: all 0.3s ease-in-out;
}

  .header{
  width: 550px;
  justify-content: center;
  margin-left: 20rem;
  margin-top: 5rem;

    
} 
.header label{
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 20px;
}
.text-center{
  margin-top: 2rem;
}
</style>