import Vue from 'vue'

const mixin = Vue.mixin({
    data: () => ({
        eBayMixin: {
            skuP: [
              v => !!v || 'Field is required',
            ],
            title: [
              v => !!v || 'Field is required',
            ],
            description: [
              v => !!v || 'Field is required',
            ],
            condition: [
              v => !!v || 'Field is required',
            ],
            quantity: [
              v => !!v || 'Field is required',
              v => /^[0-9]*$/i.test(v) || 'Field must be numeric',
            ],
            marketplaceId: [
              v => !!v || 'Field is required',
            ],
            format: [
              v => !!v || 'Field is required',
            ],
            availableQuantity: [
              v => !!v || 'Field is required',
              v => /^[0-9]*$/i.test(v) || 'Field must be numeric',
            ],
            quantityLimitPerBuyer: [
              v => !!v || 'Field is required',
              v => /^[0-9]*$/i.test(v) || 'Field must be numeric',
            ],
            value: [
              v => !!v || 'Field is required',
              v => /^[0-9]*$/i.test(v) || 'Field must be numeric',
            ],
            currency: [
              v => !!v || 'Field is required',
            ],
            fulfillmentPolicyId: [
              v => !!v || 'Field is required',
            ],
            paymentPolicyId: [
              v => !!v || 'Field is required',
            ],
            returnPolicyId: [
              v => !!v || 'Field is required',
            ],
            categoryId: [
              v => !!v || 'Field is required',
            ],
            merchantLocationKey: [
              v => !!v || 'Field is required',
            ],
            vatPercentage: [
              v => !!v || 'Field is required',
              v => /^\d*\.?\d*$/i.test(v) || 'Field must be numeric',
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