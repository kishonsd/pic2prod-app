const mongoose = require('mongoose')

/* 
# User Model

| Key               | Type   | Required | Default      |
| --------          | ------ | -------- | ------------ |
| product_model     | string | y        |              |
| product_barcode   | string | y        |              |
| product_brand     | integer | y        |              |
| product_supplier  | integer | y        |              |
| product_price     | string | y        |              |
| created           | date   | y        | `new Date()` |
*/

const hiboutikSchema = new mongoose.Schema({

  product_model: {
    type: String,
    required: true,
    index: { unique: true }
  },

  product_barcode: {
    type: String,
    required: true
  },

  product_brand: {
    type: Number,
    required: true
  },

  product_supplier: {
    type: Number,
    required: true,
  },

  product_price: {
    type: String,
    required: true
  },

})

hiboutikSchema.method('transform', function() {
  var obj = this.toObject()

  //Rename fields
  obj.product_id = obj._id
  delete obj._id

  return obj
})

module.exports = mongoose.model('Hiboutik', hiboutikSchema)