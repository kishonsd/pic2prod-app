import serverUtil from '@/utils/serverUtil'

const state = {
    items: []
}

const mutations = {
    setItems (state, payload) { state.items = payload }
}

const actions = {
    async getItems({ commit }) {
        commit('setItems', [])
        await serverUtil('users')
            .then(res => commit('setItems', res.data))
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}