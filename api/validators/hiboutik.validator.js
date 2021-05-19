const Joi = require('joi')

const product_name = Joi.string()
    .required()

const product_barcode = Joi.string()
    .required()

const product_brand = Joi.number()
    .integer()
    .required()

const product_supplier = Joi.number()
    .integer()
    .required()

const product_price = Joi.string()
    .required()


module.exports = {
  post: Joi.object({
    product_name,
    product_barcode,
    product_brand,
    product_supplier,
    product_price
  })
}