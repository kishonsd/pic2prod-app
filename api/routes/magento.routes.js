const axios = require('axios')
const express = require('express')
const route = express.Router()
const magentoValidator = require('../validators/magento.validator')

route.get('/pic2prod/magento/categories', async (req, res) => {
    try {
        const host = process.env.MAGENTO_HOST
        const token = process.env.MAGENTO_TOKEN
        
        await axios({
            url: `${host}/categories`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => res.json(response.data.children_data))
    } catch (err) {
        console.log(err)
    }
})

route.post('/pic2prod/magento', async (req, res) => {
    try {
        const host = req.body.host
        const token = req.body.token
        
        const item = {
            product: {
                sku: req.body.sku,
                name: req.body.name,
                attribute_set_id: req.body.attribute_set_id,
                price: req.body.price,
                status: req.body.status,
                visibility: req.body.visibility,
                type_id: req.body.type_id,
                weight: req.body.weight
            }
        }

        await magentoValidator.create.validateAsync(item)

        await axios({
            url: `${host}/products`,
            method: 'POST',
            data: item,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Content-Language': 'en-US'
            }
        })
        .then((response) => {
            res.sendStatus(201)
        })

    } catch(error) {
        res.sendStatus(400)
    }
})

module.exports = route