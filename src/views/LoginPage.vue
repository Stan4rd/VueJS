<template>
<body>
    <div id="login">
        <NavBarVue/>
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input type="text" name="username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="text" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                            </div>
                            <div id="register-link" class="text-right">
                                <!-- <a href="#" class="text-info">Register here</a> -->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</template>




<style scoped>

body {
  margin: 0;
  padding: 0;
  /* background-color: #ecf5f5; */
  height: 100vh;
}
#login .container #login-row #login-column #login-box {
  margin-top: 50px;
  max-width: 600px;
  margin-left: 300px;
  height: 400px;
  border: 5px solid #1a1818;
 border-radius: 20px ;
  background-color: #969b9a;
}

.text-center{
align-items: center;
align-content: center;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 100px;
  padding-top: 50px;
  padding-left: 190px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>

<script>
import NavBarVue from "../components/NavBar.vue";
import axios from 'axios';

export default{
  components:{
    NavBarVue
  },
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      errors: [],
      baseURL: "http://127.0.0.1:8000/api"
    }
  },
   methods: {
    async loginuser(){
      try{
        localStorage.setItem("token", (await axios.post(this.baseURL + '/userLogin', this.user)).data.token);
        
      } catch (error){
        this.errors.push(error);
        console.log(this.errors[this.errors.length]);
      }

      window.location.reload();
    }
  }
}

</script>