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
            .ref(`products/${uid}`)
            .once('value')
            .then(snapshot => snapshot.val())

        const products = []
        for (let key in items) products.push({ ...items[key], key })
        commit('setItems', products)
    }
}


export default {
    state,
    mutations,
    actions,
    namespaced: true
}