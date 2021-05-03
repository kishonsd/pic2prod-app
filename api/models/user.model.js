const mongoose = require('mongoose')

/* 
# User Model

| Key      | Type   | Required | Default      |
| -------- | ------ | -------- | ------------ |
| username | string | y        |              |
| email    | string | y        |              |
| password | string | y        |              |
| created   | date   | y        | `new Date()` |
*/

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }
  },

  email: {
    type: String,
    required: true,
    index: { unique: true }
  },

  password: {
    type: String,
    required: true
  },

  created: {
    type: Date,
    default: Date()
  },

  credits: {
    type: Number,
    default: 100
  }

})

module.exports = mongoose.model('User', userSchema)