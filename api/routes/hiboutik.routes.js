const PostModel = require('../models/hiboutik.model')
const axios = require('axios')
const express = require('express')
const route = express.Router()
const FormData = require('form-data')

const host = process.env.HIBOUTIK_HOST
const auth = {
  username: process.env.HIBOUTIK_USER,
  password: process.env.HIBOUTIK_PASS
}

function convert (data) {
  const form = new FormData()
  Object.keys(data)
    .forEach(key => form.append(key, data[key]))
  return form
}

route.get('/hiboutik/all', async (req, res) => {
  axios({
    url: `${host}/products`,
    method: 'GET',
    auth
  })
  .then((response) => {
    res.json(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
})
  

route.post('/hiboutik/post', async (req, res) => {
  const product = {
    product_model: req.body.product_model,
    product_barcode: req.body.product_barcode,
    product_brand: req.body.product_brand,
    product_supplier: req.body.product_supplier,
    product_price: req.body.product_price
  }
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
    res.send(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = route