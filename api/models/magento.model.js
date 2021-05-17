const mongoose = require('mongoose')

/* 
# User Model

| Key                | Type    | Required | Default      |
| ------------------ | ------- | -------- | ------------ |
| sku                | string  | y        |              |
| name               | string  | y        |              |
| attribute_set_id   | integer | y        |              |
| price              | integer | y        |              |
| visibility         | integer | y        |              |
| type_id            | string  | y        |              |
| weight             | string  | y        |              |
| created            | date    | y        | `new Date()` |
*/

const magentoSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: true,
        index: { unique: true }
    },

    name: {
        type: String,
        required: true,
        index: { unique: true }
    },

    attribute_set_id: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    visibility: {
        type: Number,
        required: true
    },

    type_id: {
        type: String,
        required: true
    },

    weight: {
        type: String,
        required: true
    },

    created: {
        type: Date,
        default: Date()
    }


})

module.exports = mongoose.model('Magento', magentoSchema)