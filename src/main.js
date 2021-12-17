import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

const firebaseConfig = {

  apiKey: "AIzaSyDaeFuzKG-qJ8Umq6bBpXBXDgxtZ6KsxLE",
  authDomain: "pic2prod-dad7a.firebaseapp.com",
  projectId: "pic2prod-dad7a",
  storageBucket: "pic2prod-dad7a.appspot.com",
  messagingSenderId: "77910974071",
  appId: "1:77910974071:web:0002cf1d06b9b55fe33072",
  measurementId: "G-W1BQ9XQVN2"
  
};
