const Joi = require('joi')

const title = Joi.string()
    .required()

const description = Joi.string()
    .required()

const condition = Joi.string()
    .required()

const quantity = Joi.number()
    .integer()
    .required()


module.exports = {
    create: Joi.object({
        product: {
            title,
            description,
        },
        condition,
        availability: {
            shipToLocationAvailability: {
                quantity
            }
        }
    })
}