import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import createPersistedState from 'vuex-persistedstate';
import user from './modules/user'
import users from './modules/users'
import toast from './modules/toast'


=======
import user from './scripts/user'
import products from './scripts/products'
import stores from './scripts/stores'
>>>>>>> development
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
<<<<<<< HEAD
    users,
    toast
  },
  plugins: [createPersistedState()]
=======
    products,
    stores
  }
>>>>>>> development
})
