import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import LoginPage from './views/LoginPage.vue'
import Register from './views/Register.vue'
import { createRouter, createWebHistory } from 'vue-router'





const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/LoginPage',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
    
    ]

})

export default router

createApp(App).use(router).mount('#app')



