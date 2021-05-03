const MONGO_URI = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : 'mongodb://mongo:27017/pic2prod'
const history = require('connect-history-api-fallback')
const MongoStore = require('connect-mongo')
const session = require('express-session')
const appRoot = require('app-root-path')
const mongoose = require('mongoose')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')



mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
})


function start () {
  const app = express()
  app.use(morgan('tiny'))

  // Security
  app.use(helmet())
  app.disable('x-powered-by')
  app.use(cors({ origin: true, credentials: true }))
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  // Session
  app.use(session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
      collection: 'sessions',
      ttl: parseInt(1000 * 60 * 60 * 2) / 1000
    }),

    cookie: {
      sameSite: true,
      secure: false,
      maxAge: parseInt(1000 * 60 * 60 * 2)
    }
  }))

  // Routes
  const distDir = path.join(appRoot.path, 'dist')
  app.use(express.static(distDir))
  app.use(history({
    index: path.join(distDir, 'index.html')
  }))

  app.use('/api', [
    require('./routes/user.routes'),
  ])



  return app
}

module.exports = { start }

