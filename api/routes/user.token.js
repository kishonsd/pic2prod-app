var express = require('express');
const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const { Token } = require('../models/user.model')
const { SECRET } = require('../models/jwt')

const verifyToken = (req, res, next) => {
  try {
    req.user = jwt.verify(req.headers.authorization, SECRET);
    return next()
  } catch (err) {
    console.log(err)
    return res.status(401)
  }
}

router.get('/user/', verifyToken, async (req, res) => {
  const { _id } = req.user
  const tokens = await Token.find({ user: _id })
  res.json(tokens)
})

router.get('/user/:id', verifyToken, async (req, res) => {
  const { _id } = req.user
  const { id } = req.params
  const token = await Token.findOne({ _id: id, user: _id })
  res.json(token)
})

router.post('/user/', verifyToken, async (req, res) => {
  const { name } = req.body
  const { _id } = req.user
  const token = new Token({ name, done: false, user: _id })
  await token.save()
  res.json(token)
})

router.put('/user/:id', verifyToken, async (req, res) => {
  const { name, done } = req.body
  const { id } = req.params
  const token = await Token.findOneAndUpdate({ _id: id }, { name, done })
  await token.save()
  res.json(token)
})

router.delete('/user/:id', verifyToken, async (req, res) => {
  const { id } = req.params
  await token.deleteOne({ _id: id })
  res.status(200).send()
})

module.exports = router;