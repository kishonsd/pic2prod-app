const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const validator = require('../validators/user.validator')
const jwt = require('jsonwebtoken')
const { SECRET } = require('../models/jwt')
const bcrypt = require('bcrypt')
const saltRounds = 10

const {User} = require('../models/user.model')

router.post('/user/register', async (req, res) => {
  try {
    const { username, password, confirmPassword, email } = req.body
    await validator.register.validateAsync({ username, password, confirmPassword, email })
    const existingUser = await User.findOne({ username });
    if(existingUser){
      return res.json({ err: 'user already exists' }).status(401);
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const registerUser = new User({
      username,
      password: hashedPassword,
      email
    })
    await registerUser.save();
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
})

router.post('/user/login', async (req, res) => {
  try {
    const { username, password, } = req.body
    await validator.login.validateAsync({ username, password })
    const { _id, password: userPassword } = await User.findOne({ username });

    const match = await bcrypt.compare(password, userPassword);
    if (match) {
      const token = await jwt.sign({ username, _id }, SECRET);
      return res.json({ token });
    }
  res.status(401);
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
  }
})

module.exports = router