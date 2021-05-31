const Joi = require('joi')

const sku = Joi.string()
    .required()

const marketplaceId = Joi.string()
    .required()

const format = Joi.string()
    .required()

const availableQuantity = Joi.number()
    .integer()
    .required()

const quantityLimitPerBuyer = Joi.number()
    .integer()
    .required()

const value = Joi.number()
    .required()

const currency = Joi.string()
    .alphanum()
    .required()

const fulfillmentPolicyId = Joi.string()
    .alphanum()
    .required()

const paymentPolicyId = Joi.string()
    .alphanum()
    .required()

const returnPolicyId = Joi.string()
    .alphanum()
    .required()

const categoryId = Joi.string()
    .alphanum()
    .required()

const merchantLocationKey = Joi.string()
    .required()

const vatPercentage = Joi.number()
    .required()

const applyTax = Joi.boolean()
    .default(false)


module.exports = {
    create: Joi.object({
        sku,
        marketplaceId,
        format,
        availableQuantity,
        quantityLimitPerBuyer,
        pricingSummary: {
            price: {
                value,
                currency,
            }
        },
        listingPolicies: {
            fulfillmentPolicyId,
            paymentPolicyId,
            returnPolicyId,
        },
        categoryId,
        merchantLocationKey,
        tax: {
            vatPercentage,
            applyTax
        }
    })
}