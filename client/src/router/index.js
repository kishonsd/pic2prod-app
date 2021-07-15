import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '@/views/Home'
import Register from '@/views/Register'
import Panel from '@/views/Panel'
import About from '@/views/About'
=======

import Post from '@/views/Post'
import Home from '@/views/Home'
import Signin from '@/views/Signin'
import Stores from '@/views/Stores'
import Signup from '@/views/Signup'
import Dashboard from '@/views/Dashboard'
import Products from '@/views/Products'
>>>>>>> development

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
<<<<<<< HEAD

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/panel',
    name: 'Panel',
    component: Panel,
    meta: {
      guarded: true
    }
  },

  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      guarded: true
=======
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: {
      layout: 'empty'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      layout: 'empty'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      layout: 'dashboard'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      layout: 'dashboard'
    }
  },
  {
    path: '/stores',
    name: 'Stores',
    component: Stores,
    meta: {
      layout: 'dashboard'
    }
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
    meta: {
      guarded: true,
      layout: 'dashboard'
>>>>>>> development
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
