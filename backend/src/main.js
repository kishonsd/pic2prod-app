const admin = require("firebase-admin")
const serviceAccount = require("./constants/serviceAccount.json")
const logger = require('./utilities/logger')('main')
const platforms = require('./platforms')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pic2prod-17012.firebaseio.com"
})

const database = require('./utilities/database')

async function main () {
    logger.info('start service')

    // user level
    const userPosts = await database.postsGet()
    for (let userKey in userPosts) {

        // post level
        const posts = userPosts[userKey]
        for (let postKey in posts) {
            const post = posts[postKey]
            if (post.complete) continue

            // store level
            for (let store of post.stores) {
                if (store.complete) continue
                const product = await database.productGetByKey(userKey, post.productId)
                const response = await platforms[store.platform](
                    store.credentials,
                    product,
                    store.meta
                )

                console.log(response)

                store.complete = true
                await database.main
                    .ref(`post/${userKey}/${postKey}/stores`)
                    .set(post.stores)
            } // store level

            await database.main
                .ref(`post/${userKey}/${postKey}/complete`)
                .set(true)
        } // post level
    } // user level
}


module.exports = main