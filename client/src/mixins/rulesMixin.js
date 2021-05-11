import Vue from 'vue'

const mixin = Vue.mixin({
  data: () => ({
    rulesMixin: {
      username: [
        v => !!v || 'Field is required',
        v => /^[a-z0-9]+$/i.test(v) || 'Field must be alphanumeric',
        v => (v && v.length > 5) || 'Field must be more than 5 characters',
        v => (v && v.length <= 32) || 'Field must be less than 32 characters',
      ],
      password: [
        v => !!v || 'Field is required',
        v => /^[a-z0-9]+$/i.test(v) || 'Field must be alphanumeric',
        v => (v && v.length > 8) || 'Field must have more than 8 characters',
        v => (v && v.length <= 32) || 'Field must have less than 32 characters',
        v => /^(?=.*[A-Z]).*$/.test(v) || 'Field must have at least one uppercase letter',
        v => /^(?=.*[a-z]).*$/.test(v) || 'Field must have at least one lowercase letter',
        v => /[\d]{1}/.test(v) || 'Field must have at least one digit number'
      ],
      email: [
        v => !!v || 'Field is required',
        v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(v) || 'Field must be valid',
        v => (v && v.length <= 32) || 'Field must have less than 32 characters',
      ],
      attribute_code: [
        v => !!v || 'Field is required',
        v => /^[a-z0-9]+$/i.test(v) || 'Field must be alphanumeric',
      ],
      value: [
        v => !!v || 'Field is required',
        v => /^[a-z0-9]+$/i.test(v) || 'Field must be alphanumeric',
      ],
    }
  })
})

export default mixin