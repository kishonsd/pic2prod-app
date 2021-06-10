const { Router } = require('express')
const UserModel = require('../models/user.model')
const UserValidator = require('../validators/user.validator')
const route = Router()

route.get('/users', async (req, res) => {
  try {
    const users = await UserModel
      .find()
      .sort({ created: '-1' })
    res.send(users)
  }
  catch(error) {
    console.log(error)
    res.sendStatus(401)
  }
})

route.get('/users/:id', async (req, res) => {
  try {
    const users = await UserModel.findById(req.params.username)
    res.json(users)
  }
  catch(error) {
    console.log(error)
    res.sendStatus(401)
  }
})

route.post('/user/create', async (req, res) => {
  try {
    const {
      email,
      username,
      password,
      confirmPassword
    } = req.body

    await UserValidator.register.validateAsync({
      email,
      username,
      password,
      confirmPassword
    })

    const newUser = new UserModel({
      email,
      username,
      password,
      confirmPassword
    })

    await newUser.save()
    res.sendStatus(201)

  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
})

route.delete('/users/:id', async (req, res) => {
  try {
    const removedUser = await UserModel.remove({ _id: req.params.id })
    res.send(removedUser)
  } catch(error) {
    res.sendStatus(400)
  }
})

module.exports = route