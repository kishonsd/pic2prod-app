import firebase from 'firebase'
const state = {
    items: []
}

const mutations = {
    setItems (state, payload) { state.items = payload }
}

const actions = {
    async loadItems ({ rootState, commit }) {
        const uid = rootState.user.me.uid
        const items = await firebase.database()
            .ref(`stores/${uid}`)
            .once('value')
            .then(snapshot => snapshot.val())

        const stores = []
        for (let key in items) stores.push({ ...items[key], key })

        commit('setItems', stores)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}