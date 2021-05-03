import Vue from 'vue'

const mixin = Vue.mixin({
  data: () => ({
    rulesMixin: {
      username: [
        v => !!v || 'Field is required',
        v => /^[a-z0-9]+$/i.test(v) || 'Username must be alphanumeric',
        v => (v && v.length > 5) || 'Username must be more than 5 characters',
        v => (v && v.length <= 32) || 'Username must be less than 32 characters',
      ],
      password: [
        v => !!v || 'Field is required',
        v => /^[a-z0-9]+$/i.test(v) || 'Password must be alphanumeric',
        v => (v && v.length > 8) || 'Password must have more than 8 characters',
        v => (v && v.length <= 32) || 'Password must have less than 32 characters',
        v => /^(?=.*[A-Z]).*$/.test(v) || 'Password must have at least one uppercase letter',
        v => /^(?=.*[a-z]).*$/.test(v) || 'Password must have at least one lowercase letter',
        v => /[\d]{1}/.test(v) || 'Password must have at least one digit number'
      ],
      email: [
        v => !!v || 'Field is required',
        v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(v) || 'Email must be valid',
        v => (v && v.length <= 32) || 'Password must have less than 32 characters',
      ]
    }
  })
})

export default mixin