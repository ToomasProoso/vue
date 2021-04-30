import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login"
import Multiplication from "@/views/Multiplication";
import Bank from "@/views/Bank";
import Register from "@/views/Register"
import Bank_login from "@/views/BankLogin"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/bank_login',
    name: 'Bank login',
    component: Bank_login
  },

  {
    path: '/multiplication',
    name: 'Multiplication',
    component: Multiplication
  },
  {
    path: '/bank',
    name: 'Bank',
    component: Bank
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
