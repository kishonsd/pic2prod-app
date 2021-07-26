const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert(require("../constants/serviceAccount.json")),
    databaseURL: "https://pic2prod-17012.firebaseio.com"
})


const db = admin.database()
const logger = require('./logger')('database')

async function postsGet () {
    const ref = 'post'
    logger.info(`posts.get => ${ref}`)
    return db
        .ref(ref)
        .once('value')
        .then(snapshot => snapshot.val())
}

async function postSet (userId, postId, stores) {
    const ref = `post/${userId}/${postId}/stores`
    logger.info(`posts.set => ${ref}`)
    return db
        .ref(ref)
        .set(stores)

}

async function productGet (userId, productId) {
    const ref = `products/${userId}/${productId}`
    logger.info(`product.get => ${ref}`)
    return db
        .ref(ref)
        .once('value')
        .then(snapshot => snapshot.val())
}

module.exports = {
    posts: {
        get: postsGet
    },

    post: {
        set: postSet
    },

    product: {
        get: productGet
    }
}