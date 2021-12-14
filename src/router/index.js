import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterView from '../views/RegisterView.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {

   path:'/registerview',
   name:'RegisterView',
   component: RegisterView
  }, 

  {
   path:'/signin',
   name: 'SignIn',
   component:SignIn

  }

]

const router = new VueRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router