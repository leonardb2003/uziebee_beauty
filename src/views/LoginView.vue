<template>
  <div class="container">
    <div class="form-box login">
      <h2>Login</h2>
      <form action="https://formspree.io/f/xlevpezg" method="post" role="form" class="formspree-form">
        <div class="insert-box">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <input type="email" name="email" required>
          <label>Email</label>
        </div>
        <div class="insert-box">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <input type="password" name="password" required>
          <label>Password</label>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"> Remember Me </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" class="enter"> Login </button>
        <div class="register-login">
          <p>Don't have an account? <a href="#" class="register-link">Register</a></p>
        </div>

      </form>
    </div>
  </div>
</template>
<style scoped>
.container{
  position: relative;
  background: transparent;
  width: 500px;
  height: 540px;
  background-color: pink;
  border: 2px solid #f5f1f4;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px black;
  margin-top: 60px;
}
.container .form-box{
  width: 100%;
  padding: 50px;
}
.form-box h2{
  font-size: 60px;
  text-align: center;
  color: #332f2f;
}
.insert-box {
  margin: 40px 0;
  position: relative;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid;

}
.insert-box input:focus~label,
.insert-box input:valid~label{
  top: -5px;
}
.insert-box input{
  font-weight: 600;
  color: #433e3e;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background: transparent;
}
.insert-box label{
  position: absolute;
  font-size: 1rem;
  font-weight: 500;
  top: 50%;
  left: 5px;
  pointer-events: none;
  transform: translateY(-50%);
  color: #272020;
  transition: .4s;
}
.insert-box .fa {
  margin-left: 300px;
  color: black;
}
.remember-forgot {
  margin: -15px 0 15px;
  font-weight: 600;
  color: #3c3232;
  justify-content: space-between;
  display: flex;
}
.remember-forgot a {
  text-decoration: none;
  color: #383535;
}
.enter{
  width: 100%;
  height: 50px;
  background: rgb(234, 144, 159);
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
}
.remember-forgot label input{
  accent-color: #272020;
  margin-right: 3px;
}
.register-login {
  color: #383535;
  text-align: center;
  font-size: 21px;
  margin: 30px;
}
.register-link  {
  text-decoration: none;
  color: #383535;
}


</style>