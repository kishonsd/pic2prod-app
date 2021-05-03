const mongoose = require('mongoose')
const express = require('express')
const routes = require('./routes')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')


mongoose.connect('mongodb://localhost:27017/pic2prod', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})


function start () {
  const app = express()

  // Logging
  app.use(morgan('tiny'))


  // Security
  app.use(helmet())
  app.disable('x-powered-by')
  app.use(cors({ origin: true, credentials: true }))
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())


  // Routes
  app.use('/api', [
    routes.user,
    routes.magento
  ])

  return app
}

module.exports = { start }