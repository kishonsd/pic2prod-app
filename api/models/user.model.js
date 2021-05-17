const bcrypt = require('bcryptjs')
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

userSchema.pre('save', async function (next) {
  const user = this
  // only hash the password if it has been modified (or is new)
  if(!user.isModified('password')) return next()
  // generate a salt
  const SALT = parseInt(process.env.CRYPT_SALT)
  const salt = bcrypt.genSaltSync(SALT)
  // hash password
  user.password = await bcrypt.hashSync(user.password, salt)
  next()
})

module.exports = mongoose.model('User', userSchema)