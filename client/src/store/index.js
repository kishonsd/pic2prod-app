import Vue from 'vue'
import Vuex from 'vuex'
import user from './scripts/user'
import products from './scripts/products'
import stores from './scripts/stores'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    products,
    stores
  }
})
