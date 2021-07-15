const admin = require('firebase-admin')
const db = admin.database()
const logger = require('../utilities/logger')('database')

function toArray (snapshot) {
    return Object.keys(snapshot)
        .map(key => new Object({ key, ...snapshot[key] }))
}

async function postsGet () {
    logger.info('posts get')
    return db
        .ref('post')
        .once('value')
        .then(snapshot => snapshot.val())
}

async function productGetByKey (userId, productId) {
    logger.info(`product get ${productId}`)
    return db
        .ref(`products/${userId}/${productId}`)
        .once('value')
        .then(snapshot => snapshot.val())
}


module.exports = {
    postsGet,
    productGetByKey,
    toArray,
    main: db
}