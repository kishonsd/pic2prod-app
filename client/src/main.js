import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';


// axios.defaults.withCredentials = true
// axios.defaults.baseURL = "localhost:5000"; // Set the API Server URL...

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
