async function read (identifier, validator, model) {
    await validator.validateAsync(identifier)
    const item = await model.findOne(identifier)
    return item
}

async function save (body, validator, model) {
    await validator.validateAsync(body)
    await model(body).save()
}

module.exports = {
    read,
    save
}