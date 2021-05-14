const validator = require('../validators/hiboutik.validator')
const pic2prod = require('../utils/pic2prod')
const PostModel = require('../models/hiboutik.model')
const express = require('express')
const route = express.Router()

route.get('/hiboutik/all', async (req, res) => {
    try {
      const items = await PostModel.find()
      res.json(items)
    }
    catch(error) {
      console.log(error)
      res.sendStatus(400)
    }
  })
  

route.post('/hiboutik/post', async (req, res) => {
    try {
        const { product_name, product_barcode, product_brand, product_supplier, product_price } = req.body
        await pic2prod.save(
          { product_name, product_barcode, product_brand, product_supplier, product_price },
          validator.create,
          PostModel
        ).then(() => res.sendStatus(201))
    } catch (error) {
    console.log(error)
    res.sendStatus(400)
    }
})

module.exports = route