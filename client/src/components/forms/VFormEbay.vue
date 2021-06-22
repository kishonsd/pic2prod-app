<template>
    <v-form v-model="valid" ref="form">
        <v-text-field 
            label="SKU" 
            v-model="ebayInventory.skuP"
            :rules="eBayMixin.skuP"
        ></v-text-field>
        <v-text-field 
            label="Title"
            v-model="ebayInventory.title"
            :rules="eBayMixin.title"
        ></v-text-field>
        <v-text-field 
            label="Description"
            v-model="ebayInventory.description"
            :rules="eBayMixin.description"
        ></v-text-field>
        <v-select
            :items="conditions"
            v-model="ebayInventory.condition"
            label="Condition"
        ></v-select>
        <v-text-field 
            label="Quantity"
            v-model.number="ebayInventory.quantity"
            :rules="eBayMixin.quantity"
        ></v-text-field>
        <v-select
          :items="marketPlace"
          v-model="ebayOffer.marketplaceId"
          label="MarketPlace"
        ></v-select>
        <v-text-field 
            label="Quantity Per Buy"
            v-model.number="ebayOffer.quantityLimitPerBuyer"
            :rules="eBayMixin.quantityLimitPerBuyer"
        ></v-text-field>
        <v-text-field 
            label="Price Value"
            v-model.number="ebayOffer.value"
            :rules="eBayMixin.value"
        ></v-text-field>
        <v-select
          :items="currency"
          v-model="ebayOffer.currency"
          label="Price Currency"
        ></v-select>
        <v-select
          :items="fullfillments"
          v-model="ebayOffer.fullfillmentPolicyId"
          :item-text="'name'"
          :item-value="'id'"
          label="Fullfillment Policy"
        ></v-select>
        <v-select
          :items="payments"
          v-model="ebayOffer.paymentPolicyId"
          :item-text="'name'"
          :item-value="'id'"
          label="Payment Policy"
        ></v-select>
        <v-select
          :items="returns"
          v-model="ebayOffer.returnPolicyId"
          :item-text="'name'"
          :item-value="'id'"
          label="Return Policy"
        ></v-select>
        <v-select
          :items="categories"
          v-model="ebayOffer.categoryId"
          :item-text="'name'"
          :item-value="'id'"
          label="Category"
        ></v-select>
        <v-select
          :items="locations"
          v-model="ebayOffer.merchantLocationKey"
          :item-text="'name'"
          :item-value="'name'"
          label="Merchant Location"
        ></v-select>
        <v-text-field 
            label="Vat Percentage"
            v-model.number="ebayOffer.vatPercentage"
            :rules="eBayMixin.vatPercentage"
        ></v-text-field>
        <v-btn 
        class="mr-3"
        color="primary"
        :disabled="!valid"
        :loading="loading"
        @click="addToEbay"
        >Add</v-btn>
        <v-btn 
        color="secondary"
        @click="oauthFunc"
        >Oauth</v-btn>
    </v-form>
</template>

<script>
import eBayMixin from '@/mixins/ebayMixin'
import serverUtil from '../../utils/serverUtil'

export default {
    name: 'VFormEbay',

    mixins: [eBayMixin],

    data: () => ({
        conditions: ['NEW', 'NEW_OTHER', 'NEW_WITH_DEFECTS', 
                    'CERTIFIED_REFURBISHED', 'SELLER_REFURBISHED', 
                    'LIKE_NEW', 'USED_EXCELLENT', 'USED_VERY_GOOD', 
                    'USED_GOOD', 'USED_ACCEPTABLE', 'FOR_PARTS_OR_NOT_WORKING'],
        currency: ['USD', 'CAD', 'GBP', 'AUD', 'EUR', 'CHF', 'CNY', 'HKD', 'PHP', 'PLN', 'SEK', 'SGD', 'TWD', 'MYR'],
        fullfillments: [],
        payments: [],
        returns: [],
        categories: [],
        ebayInventory: {},
        ebayOffer: {},
        fPolicy: {},
        pPolicy: {},
        rPolicy: {},
        categItems: {},
        locations: [],
        marketPlace: ['EBAY_US'],
        valid: true,
        loading: false
    }),

    mounted() {
        this.getFulfillmentPolicies()
        this.getPaymentPolicies()
        this.getReturnPolicies()
        this.getCategories()
        this.getLocations()
    },

    methods: {
        getFulfillmentPolicies() {
            serverUtil(`pic2prod/ebay/fullfillment_policy/EBAY_US`, {
                method: 'GET'
            })
            .then(res => {
                res.fulfillmentPolicies.map((policy) => {
                    this.fPolicy.id = policy.fulfillmentPolicyId
                    this.fPolicy.name = policy.name
                    this.fullfillments.push(this.fPolicy)
                })
            })
        },
        getPaymentPolicies() {
            serverUtil(`pic2prod/ebay/payment_policy/EBAY_US`, {
                method: 'GET'
            })
            .then(res => {
                res.paymentPolicies.map((policy) => {
                    this.pPolicy.id = policy.paymentPolicyId
                    this.pPolicy.name = policy.name
                    this.payments.push(this.pPolicy)
                })
            })
        },
        getReturnPolicies() {
            serverUtil(`pic2prod/ebay/return_policy/EBAY_US`, {
                method: 'GET'
            })
            .then(res => {
                res.returnPolicies.map((policy) => {
                    this.rPolicy.id = policy.paymentPolicyId
                    this.rPolicy.name = policy.name
                    this.returns.push(this.rPolicy)
                })
            })
        },
        getCategories() {
            serverUtil('pic2prod/ebay/categories', {
                method: 'GET'
            })
            .then(res => {
                this.categItems = res.childCategoryTreeNodes.map((cat) => ({
                    id: cat.category.categoryId,
                    name: cat.category.categoryName
                }))
                this.categItems.map(cat => {
                    this.categories.push(cat)
                })
            })
        },
        getLocations() {
            serverUtil('pic2prod/ebay/location', {
                method: 'GET'
            })
            .then(res => {
                res.map(loc => {
                    this.locations.push(loc.merchantLocationKey)
                })
            })
        },
        addToEbay() {
            this.loading = true
            if(this.$refs.form.validate()) {
                this.ebayOffer.sku = this.ebayInventory.skuP
                Object.defineProperty(this.ebayInventory, 'platform', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.ebayInventory, 'skuP', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.ebayInventory, 'server', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.ebayOffer, 'platform', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.ebayOffer, 'server', {
                    enumerable: false,
                    writable: true
                })
                this.ebayInventory.platform = 'eBayInventory'
                this.ebayOffer.platform = 'eBayOffer'
                this.ebayInventory.host = this.ebayOffer.host
                this.ebayInventory.token = this.ebayOffer.token
                this.ebayInventory.server = `pic2prod/ebay/inventory/${this.ebayOffer.sku}`
                this.ebayOffer.server = 'pic2prod/ebay/inventory/offer'
                this.$emit('getEbay', this.ebayInventory, this.ebayOffer)
                this.ebayInventory = {}
                this.ebayOffer = {}
            }
            this.loading = false
        },
        oauthFunc() {
            console.log('ouath')
        },
    }

}

</script>