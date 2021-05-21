const validator = require('../validators/user.validator')
const pic2prod = require('../utils/pic2prod')
const userModel = require('../models/user.model')
const express = require('express')
const bcrypt = require('bcryptjs')
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

    const passMatch = await bcrypt.compareSync(
      password,
      user.password
    )

    if (!passMatch) throw new Error('Invalid credentials')
    const payload = {  username: user.username }
    req.session.username = payload
    res.send(payload)
    console.log(req.session.username)

  } catch (error) {
    console.log(error)
    res.sendStatus(401)
  }
})

route.delete('/session/logout', async (req, res) => {
  try {
    if(req.session) {
      req.session.username = null
      res.sendStatus(200)
    }

  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
})

route.get('/session/me', async (req, res) => {
  try {
    const sessionUser = req.session.username
    const user = await pic2prod.read(sessionUser, validator.login, userModel)
    res.send({ _id: user._id, username: user.username })
  } catch (error) {
    console.log(error)
    res.sendStatus(401)
  }
})

module.exports = route