const Joi = require('joi')

const product_model = Joi.string()
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
  create: Joi.object({
    product_model,
    product_barcode,
    product_brand,
    product_supplier,
    product_price
  })
}
