require('../models/user.model')
const mongoose = require('mongoose')
const { Router } = require('express')
const validator = require('../validators/user.validator')
const route = Router()


route.post('/user/register', async (req, res) => {
  try {
    const { username, password, confirmPassword, email } = req.body
    await validator.register.validateAsync({ username, password, confirmPassword, email })
    await mongoose.model('user')({
      username,
      password,
      email
    }).save()
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
})

module.exports = route