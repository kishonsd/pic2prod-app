import firebase from 'firebase'

const state = {
    list: []
}


const mutations = {
    setList (state, payload) { state.list = payload }
}

const actions = {
    async loadList ({ rootState, commit }) {
        const uid = rootState.user.me.uid
        const list = await firebase.database()
            .ref(`products/${uid}`)
            .once('value')
            .then(snapshot => snapshot.val())

        const products = []
        for (let key in list) products.push(list[key])
        commit('setList', products)
    }
}


export default {
    state,
    mutations,
    actions,
    namespaced: true
}