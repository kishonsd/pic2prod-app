const Send = require('./send')
const database = require('./database')
const logger = require('./logger')('bot')

async function start () {
    logger.info('bot.start')
    const posts = await database.posts.get()

    for (const userId in posts) {
        const post = posts[userId]
        logger.info(`send user => ${userId}`)
        for (const postId in post) {
            const job = post[postId]
            logger.info(`send post => ${[postId]}`)

            if (!job.stores) continue
            for (let store of job.stores) {
                logger.info(`send store => ${[store.name]}`)
                if (store.complete) continue
                const platform = store.platform.toLowerCase()
                const { meta, credentials } = store
                const product = await database.product.get(userId, job.productId)
                const send = new Send(credentials, product, meta)
                await send[platform]()
                store.complete = true
                await database.post.set(userId, postId, job.stores)
            }
        }
    }
}

module.exports = {
    start
}