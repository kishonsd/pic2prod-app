import Vue from 'vue'
import VueRouter from 'vue-router'

import Post from '@/views/Post'
import Home from '@/views/Home'
import Signin from '@/views/Signin'
import Stores from '@/views/Stores'
import Dashboard from '@/views/Dashboard'
import Products from '@/views/Products'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
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
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
