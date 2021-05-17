const Joi = require('joi')

const sku = Joi.string()
    .required()

const name = Joi.string()
    .required()

const attribute_set_id = Joi.number()
    .integer()
    .required()

const price = Joi.number()
    .integer()
    .required()

const visibility = Joi.number()
    .integer()
    .required()

const type_id = Joi.string()
    .required()

const weight = Joi.string()
    .required()


module.exports = {
  post: Joi.object({
    sku,
    name,
    attribute_set_id,
    price,
    visibility,
    type_id,
    weight
  })
}
