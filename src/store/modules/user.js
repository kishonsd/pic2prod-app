const state = {
  me: false
}
const mutations = {
  setMe (state, payload) { state.me = payload }
}

export default {
  state,
  mutations,
  namespaced: true
}