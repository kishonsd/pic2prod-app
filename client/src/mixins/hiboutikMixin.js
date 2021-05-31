import Vue from 'vue'

const mixin = Vue.mixin({
    data: () => ({
        hiboutikMixin: {
            product_model: [
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
            host: [
              v => !!v || 'Field is required',
            ],
            username: [
              v => !!v || 'Field is required',
            ],
            password: [
              v => !!v || 'Field is required',
            ],
        },
    })
})

export default mixin