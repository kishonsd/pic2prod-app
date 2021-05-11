import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Panel from '@/views/Panel'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
