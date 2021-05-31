import Vue from 'vue'

const mixin = Vue.mixin({
    data: () => ({
        magentoMixin: {
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
            status: [
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
            host: [
              v => !!v || 'Field is required',
            ],
            token: [
              v => !!v || 'Field is required',
            ],
        },
    })
})

export default mixin