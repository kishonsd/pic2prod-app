const { Router } = require('express')
const axios = require('axios')
const route = Router()



function magentoAuth (req, res, next) {
  try {
    const { host, token } = req.body
    res.locals.host = host
    res.locals.token = token
    next()
  } catch (error) {
    res.sendStatus(400)
  }
}

route.post('/magento/categories', magentoAuth, async (req, res) => {
  try {
    const result = await axios({
      url: `${res.locals.host}/rest/V1/categories/`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${res.locals.token}`
      }
    })
      .then(response => response.data)

    res.send(result)
  } catch (error) {
    res.sendStatus(400)
  }
})

route.post('/magento/products/create', magentoAuth, async (req, res) => {
  try {
    console.log(req.body)
    const result = await axios({
      url: `${res.locals.host}/rest/V1/products/`,
      method: 'POST',
      data: {
        product: req.body.product
      },
      headers: {
        Authorization: `Bearer ${res.locals.token}`
      }
    })
      .then(response => response.data)

    console.log(result)

    res.send(result)
  } catch (error) {
    res.sendStatus(400)
  }
})

module.exports = route