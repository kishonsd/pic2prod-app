const validator = require('../validators/magento.validator')
const pic2prod = require('../utils/pic2prod')
const PostModel = require('../models/magento.model')
const express = require('express')
const route = express.Router()

route.get('/magento/all', async (req, res) => {
    try {
        const items = await PostModel.find()
        res.json(items)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
})

route.post('/magento/post', async (req, res) => {
    try {
        const { sku, name, attribute_set_id, price, visibility, type_id, weight } = req.body
        await pic2prod.save(
            { sku, name, attribute_set_id, price, visibility, type_id, weight },
            validator.post,
            PostModel
        ).then(() => res.sendStatus(201))
    } catch(error) {
        console.log(error)
        res.sendStatus(400)
    }
})

module.exports = route