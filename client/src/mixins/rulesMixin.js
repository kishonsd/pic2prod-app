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
      hiboutik: {
        product_name: [
          v => !!v || 'Field is required',
        ],
        product_barcode: [
          v => !!v || 'Field is required',
        ],
        product_brand: [
          v => !!v || 'Field is required',
          v => /^[0-9]*$/i.test(v) || 'Field must be numeric',
        ],
        product_supplier: [
          v => !!v || 'Field is required',
          v => /^[0-9]*$/i.test(v) || 'Field must be numeric',
        ],
        product_price: [
          v => !!v || 'Field is required',
        ],
      },
      magento: {
        sku: [
          v => !!v || 'Field is required',
        ],
        name: [
          v => !!v || 'Field is required',
        ],
        attribute_set_id: [
          v => !!v || 'Field is required',
          v => /^[0-9]*$/i.test(v) || 'Field must be numeric',
        ],
        price: [
          v => !!v || 'Field is required',
          v => /^[0-9]*$/i.test(v) || 'Field must be numeric',
        ],
        visibility: [
          v => !!v || 'Field is required',
          v => /^[0-9]*$/i.test(v) || 'Field must be numeric',
        ],
        type_id: [
          v => !!v || 'Field is required',
        ],
        weight: [
          v => !!v || 'Field is required',
        ],
      },
    }
  })
})

export default mixin