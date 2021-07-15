const axios = require('axios')
const logger = require('./utilities/logger')('platforms')
const FormData = require('form-data')

async function Hiboutik (credentials, product, meta) {
    logger.info('post hiboutik')
    const product_ = {}
    for (let key in product) {
        if (key === 'name') product_['product_model'] = product[key]
        if (key === 'price') product_['product_price'] = product[key]
    }

    const form = new FormData()
    if (meta) Object.keys(meta).forEach(k => form.append(k, meta[k]))
    Object.keys(product_).filter(k => meta ? !Object.keys(meta).includes(k) : k).forEach(k => form.append(k, product_[k]))

    return axios({
        url: `${credentials.domain}/api/products`,
        method: 'POST',
        data: form,

        auth: {
            username: credentials.username,
            password: credentials.password
        }
    })
        .then(response => [response.data, false])
        .catch(err => [false, err])
}

module.exports = {
    Hiboutik
}