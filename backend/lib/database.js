async function postsGet () {
    const ref = 'post'
    logger.info(`posts.get => ${ref}`)
    return db
        .ref(ref)
        .once('value')
        .then(snapshot => snapshot.val())
}
