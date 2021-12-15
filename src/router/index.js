import Vue from 'vue'
import VueRouter from 'vue-router'
import { createRouter , createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RegisterView from '../components/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

{
    path:'/registerview',
    name: 'register',
    component: RegisterView

}
]

const router = new createRouter({
  history: createWebHistory (process.env.BASE_URL),
  routes
})

export default router
