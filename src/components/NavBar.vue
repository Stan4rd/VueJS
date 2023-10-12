<template>
    <div id="navigationbar">
        <div class="navigation-container">
            <div class="home-container route-container">
                <router-link to="/" class="home route">Home</router-link>
            </div>
            <div class="other-routes">
                <!-- <div class="route-container">
                    <a class="route more">More</a>
                    <div class="dropdown">
                        <a>Link 1</a>
                        <a>Link 2</a>
                        <a>Link 3</a>
                    </div>
                </div> -->
                <div class="route-container about-container">
                    <router-link to="/Register" class="route Register">Register</router-link>
                </div>
                <div class="route-container register-container">
                    <router-link to="/LoginPage" class="route LoginPage">Login</router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
#navigationbar{
    top: 0;
    
}

.navigation-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    border-bottom: 2px solid rgba(21, 4, 72, 0.4);
    background-color: rgba(45, 38, 72, 0.4);
    position: sticky;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.4);
}

.route-container{
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 18px;
    padding-bottom: 5px;
}

.route{
    text-decoration: none;
    font-size: 120%;
    color: black;
    transition: color 0.1s;
}

.route:hover, .route:focus{
    color: rgb(12, 117, 137)
}

.other-routes{
    display: flex;
    padding-right: 6.8%;
}

.home-container{
    padding-left: 8.8%;
}

.home{
    font-weight: 200%;
    font-size: 200%;
}

</style>

<script>
import axios from 'axios'; 

export default {
    data() {
        return {
            baseURL: "http://127.0.0.1:8000/api",
            errors: [],
            checklogin: localStorage.getItem("token") ? true : false,
        }
    },
    methods: {
        logoutuser() {
            axios.post(this.baseURL + '/userLogout')
                .then(response => console.log(response.data.message))
                .catch(error => (this.errors.push(error)));

            localStorage.removeItem("token");
            window.location.reload();
        }
    }
}
</script>
