const axios = require('axios')
const express = require('express')
const route = express.Router()
const magentoValidator = require('../validators/magento.validator')


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