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
