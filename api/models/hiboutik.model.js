const mongoose = require('mongoose')

/* 
# User Model

| Key               | Type   | Required | Default      |
| --------          | ------ | -------- | ------------ |
| product_name      | string | y        |              |
| product_barcode   | string | y        |              |
| product_brand     | integer | y        |              |
| product_supplier  | integer | y        |              |
| product_price     | string | y        |              |
| created           | date   | y        | `new Date()` |
*/

const hiboutikSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
    index: { unique: true }
  },

  product_barcode: {
    type: String,
    required: true,
    index: { unique: true }
  },

  product_brand: {
    type: Number,
    required: true
  },

  product_supplier: {
    type: Number,
    required: true
  },

  product_price: {
    type: String,
    required: true
  },

  created: {
    type: Date,
    default: Date()
  }

})

module.exports = mongoose.model('Hiboutik', hiboutikSchema)