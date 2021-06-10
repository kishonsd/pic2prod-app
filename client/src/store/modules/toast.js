const meDefault = {
    state: false,
    message: '',
    color: 'info'
}

const state = {
    me: meDefault
}

const mutations = {
    setMe (state, payload) { state.me = payload }
}

const actions = {
    success ({ commit }, message) {
        commit('setMe', meDefault)
        commit('setMe', {
            state: true,
            message,
            color: 'success'
        })
    },

    info ({ commit }, message) {
        commit('setMe', meDefault)
        commit('setMe', {
            state: true,
            message,
            color: 'info'
        })
    },

    error ({ commit }, message) {
        commit('setMe', meDefault)
        commit('setMe', {
          state: true,
          message,
          color: 'error'
        })
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}