import Vue from 'vue'
<<<<<<< HEAD
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';


// axios.defaults.withCredentials = true
// axios.defaults.baseURL = "localhost:5000"; // Set the API Server URL...

Vue.config.productionTip = false
=======
import store from './store'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import vuetify from './plugins/vuetify'
import PageLayout from '@/layouts/PageLayout'
import EmptyLayout from '@/layouts/EmptyLayout'
import DashboardLayout from '@/layouts/DashboardLayout'

/* Firebase */
firebase.initializeApp({
  apiKey: "AIzaSyAXuA3cBjwxkZjh0iTt36yfJhCplH9EGzg",
  authDomain: "pic2prod-17012.firebaseapp.com",
  databaseURL: "https://pic2prod-17012.firebaseio.com",
  projectId: "pic2prod-17012",
  storageBucket: "pic2prod-17012.appspot.com",
  messagingSenderId: "439036061880",
  appId: "1:439036061880:web:5f81c3ddeef2170c372c4d"
})

/* Layouts */
Vue.component('page-layout', PageLayout)
Vue.component('empty-layout', EmptyLayout)
Vue.component('dashboard-layout', DashboardLayout)


Vue.config.productionTip = true
>>>>>>> development

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
