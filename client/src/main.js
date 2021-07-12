import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAXuA3cBjwxkZjh0iTt36yfJhCplH9EGzg",
  authDomain: "pic2prod-17012.firebaseapp.com",
  databaseURL: "https://pic2prod-17012.firebaseio.com",
  projectId: "pic2prod-17012",
  storageBucket: "pic2prod-17012.appspot.com",
  messagingSenderId: "439036061880",
  appId: "1:439036061880:web:5f81c3ddeef2170c372c4d"
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
