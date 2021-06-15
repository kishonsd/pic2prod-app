const inventory_validator = require('../validators/ebay-inventory.validator')
const offer_validator = require('../validators/ebay-offer.validator')
const axios = require('axios')
const express = require('express')
const route = express.Router()

// Get ebay inventory
route.get('/pic2prod/ebay/inventory', async (req, res) => {
    const host = process.env.EBAY_HOST
    const token = process.env.EBAY_TOKEN
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

// Get eBay Fullfillment Policies
route.get('/pic2prod/ebay/fullfillment_policy/:marketplaceID', async (req, res) => {
    const token = process.env.EBAY_TOKEN
    await axios({
        url: `https://api.ebay.com/sell/account/v1/fulfillment_policy?marketplace_id=${req.params.marketplaceID}`,
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

// Get eBay Payment Policies
route.get('/pic2prod/ebay/payment_policy/:marketplaceID', async (req, res) => {
    const token = process.env.EBAY_TOKEN
    await axios({
        url: `https://api.ebay.com/sell/account/v1/payment_policy?marketplace_id=${req.params.marketplaceID}`,
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

// Get eBay Return Policies
route.get('/pic2prod/ebay/return_policy/:marketplaceID', async (req, res) => {
    const token = process.env.EBAY_TOKEN
    await axios({
        url: `https://api.ebay.com/sell/account/v1/return_policy?marketplace_id=${req.params.marketplaceID}`,
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

// Get eBay Categories
route.get('/pic2prod/ebay/categories', async (req, res) => {
    const token = process.env.EBAY_TOKEN
    await axios({
        url: 'https://api.ebay.com/commerce/taxonomy/v1/category_tree/0',
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        res.json(response.data.rootCategoryNode)
    })
    .catch((err) => {
        console.log(err)
    })
})

// Get eBay Location
route.get('/pic2prod/ebay/location', async (req, res) => {
    const token = process.env.EBAY_TOKEN
    await axios({
        url: 'https://api.ebay.com/sell/inventory/v1/location/',
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        res.json(response.data.locations)
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
        console.log(error)
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
            format: 'FIXED_PRICE',
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
        console.log(error)
        res.sendStatus(400)
    }
})

module.exports = route