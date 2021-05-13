const validator = require('../validators/user.validator')
const pic2prod = require('../utils/pic2prod')
const userModel = require('../models/user.model')
const express = require('express')
const route = express.Router()

route.post('/session/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await pic2prod.read(
      { username },
      validator.login,
      userModel
    )
    if (!user) throw new Error('User does not exist')

    if (password != user.password) throw new Error('Invalid credentials')
    const payload = { username: user.username }
    req.session.user = payload
    res.send(payload)

  } catch (error) {
    console.log(error)
    res.sendStatus(401)
  }
})

route.get('/session/me', async (req, res) => {
  try {
    const { username } = req.session.user
    const user = await pic2prod.read({ username }, validator.login, userModel)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.sendStatus(401)
  }
})

module.exports = route