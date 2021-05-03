const Joi = require('joi')

const username = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required()


const password = Joi.string()
  .min(8)
  .max(30)
  .required()

const confirmPassword = Joi.ref('password')

const email = Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })




module.exports = {
  login: Joi.object({
    username,
    password
  }),

  register: Joi.object({
    username,
    password,
    confirmPassword,
    email
  }).with('password', 'confirmPassword')
}
