<<<<<<< Updated upstream
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kishonsd from '../views/Kishonsd'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kishonsd',
    name: 'Kishonsd',
    component: Kishonsd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
=======
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
>>>>>>> Stashed changes
