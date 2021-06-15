import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import user from './modules/user'
import users from './modules/users'
import toast from './modules/toast'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    users,
    toast
  },
  plugins: [createPersistedState()]
})
