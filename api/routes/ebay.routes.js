const inventory_validator = require('../validators/ebay-inventory.validator')
const offer_validator = require('../validators/ebay-offer.validator')
const axios = require('axios')
const express = require('express')
const route = express.Router()
const FormData = require('form-data')

function convert (data) {
    const form = new FormData()
    Object.keys(data)
      .forEach(key => form.append(key, data[key]))
    return form
}

route.get('/pic2prod/ebay/inventory', async (req, res) => {
    await axios({
        url: `${host}/inventory_item`,
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
    res.json(response.data)
    })
    .catch((err) => {
    console.log(err)
    })
})

// Create ebay inventory

route.put('/pic2prod/ebay/inventory/:sku', async (req, res) => {
    try {
        const host = req.body.host
        const token = req.body.token
        const inventory = {
            product: {
                title: req.body.title,
                description: req.body.description
            },
            condition: req.body.condition,
            availability: {
                shipToLocationAvailability: {
                    quantity: req.body.quantity
                }
            }
        }
        
        await inventory_validator.create.validateAsync(inventory)

        await axios({
            url: `${host}/inventory_item/${req.params.sku}`,
            method: 'PUT',
            data: inventory,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Content-Language': 'en-US'
            },
        })
        .then((response) => {
            res.sendStatus(201)
        })
    } catch(error) {
        res.sendStatus(400)
    }
})

// Create an offer based on inventory SKU and publish offer

route.post('/pic2prod/ebay/inventory/offer', async (req, res) => {
    try {
        const host = req.body.host
        const token = req.body.token
        const offer = {
            sku: req.body.sku,
            marketplaceId: req.body.marketplaceId,
            format: req.body.format,
            availableQuantity: req.body.availableQuantity,
            quantityLimitPerBuyer: req.body.quantityLimitPerBuyer,
            pricingSummary: {
                price: {
                    value: req.body.value,
                    currency: req.body.currency
                }
            },
            listingPolicies: {
                fulfillmentPolicyId: req.body.fulfillmentPolicyId,
                paymentPolicyId: req.body.paymentPolicyId,
                returnPolicyId: req.body.returnPolicyId
            },
            categoryId: req.body.categoryId,
            merchantLocationKey: req.body.merchantLocationKey,
            tax: {
                vatPercentage: req.body.vatPercentage,
                applyTax: true
            }
        }

        await offer_validator.create.validateAsync(offer)

        await axios({
            url: `${host}/offer`,
            method: 'POST',
            data: offer,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Content-Language': 'en-US'
            },
        })
        .then((response) => {
            console.log(response.data)
            return axios({
                url: `${host}/offer/${response.data.offerId}/publish`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Content-Language': 'en-US'
                },
            })
            .then((resp) => {
                res.sendStatus(201)
            })
        })
    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = route