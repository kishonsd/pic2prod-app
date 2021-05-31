const axios = require('axios')
const express = require('express')
const route = express.Router()
const FormData = require('form-data')
const hiboutikValidator = require('../validators/hiboutik.validator')

function convert(data) {
    const form = new FormData()
    Object.keys(data)
        .forEach(key => form.append(key, data[key]))
    return form
}

route.get('/pic2prod/hiboutik', async (req, res) => {
  axios({
    url: `${host}/products`,
    method: 'GET',
    auth: req.body.auth
  })
  .then((response) => {
    res.json(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
})
  

route.post('/pic2prod/hiboutik', async (req, res) => {
  try {
    const auth = {
      username: req.body.username,
      password: req.body.password
    }
    const host = req.body.host
    const product = {
      product_model: req.body.product_model,
      product_barcode: req.body.product_barcode,
      product_brand: req.body.product_brand,
      product_supplier: req.body.product_supplier,
      product_price: req.body.product_price
    }
  
    await hiboutikValidator.create.validateAsync(product)
    
    const form = convert(product)
    await axios({
      url: `${host}/products`,
      method: 'POST',
      data: {
        form
      },
      headers: form.getHeaders(),
      auth
    })
    .then((response) => {
      res.sendStatus(201)
    })
  } catch(error) {
    res.sendStatus(400)
  }
})

module.exports = route