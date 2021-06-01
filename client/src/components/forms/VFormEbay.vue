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
        <v-text-field 
            label="Condition"
            v-model="ebayInventory.condition"
            :rules="eBayMixin.condition"
        ></v-text-field>
        <v-text-field 
            label="Quantity"
            v-model.number="ebayInventory.quantity"
            :rules="eBayMixin.quantity"
        ></v-text-field>
        <v-text-field 
            label="MarketPlace"
            v-model="ebayOffer.marketplaceId"
            :rules="eBayMixin.marketplaceId"
        ></v-text-field>
        <v-text-field 
            label="Format"
            v-model="ebayOffer.format"
            :rules="eBayMixin.format"
        ></v-text-field>
        <v-text-field 
            label="Available Quantity"
            v-model.number="ebayOffer.availableQuantity"
            :rules="eBayMixin.availableQuantity"
        ></v-text-field>
        <v-text-field 
            label="Quantity Limit Per Buyer"
            v-model.number="ebayOffer.quantityLimitPerBuyer"
            :rules="eBayMixin.quantityLimitPerBuyer"
        ></v-text-field>
        <v-text-field 
            label="Price Value"
            v-model.number="ebayOffer.value"
            :rules="eBayMixin.value"
        ></v-text-field>
        <v-text-field 
            label="Price Currency"
            v-model="ebayOffer.currency"
            :rules="eBayMixin.currency"
        ></v-text-field>
        <v-text-field 
            label="Fulfillment Policy"
            v-model="ebayOffer.fulfillmentPolicyId"
            :rules="eBayMixin.fulfillmentPolicyId"
        ></v-text-field>
        <v-text-field 
            label="Payment Policy"
            v-model="ebayOffer.paymentPolicyId"
            :rules="eBayMixin.paymentPolicyId"
        ></v-text-field>
        <v-text-field 
            label="Return Policy"
            v-model="ebayOffer.returnPolicyId"
            :rules="eBayMixin.returnPolicyId"
        ></v-text-field>
        <v-text-field 
            label="Category"
            v-model="ebayOffer.categoryId"
            :rules="eBayMixin.categoryId"
        ></v-text-field>
        <v-text-field 
            label="Merchant Location"
            v-model="ebayOffer.merchantLocationKey"
            :rules="eBayMixin.merchantLocationKey"
        ></v-text-field>
        <v-text-field 
            label="Vat Percentage"
            v-model.number="ebayOffer.vatPercentage"
            :rules="eBayMixin.vatPercentage"
        ></v-text-field>
        <v-text-field 
            label="Host"
            v-model="ebayOffer.host"
            :rules="eBayMixin.host"
        ></v-text-field>
        <v-text-field 
            label="Token"
            v-model="ebayOffer.token"
            :rules="eBayMixin.token"
        ></v-text-field>
        <v-btn 
        color="primary"
        :disabled="!valid"
        :loading="loading"
        @click="addToEbay"
        >Add</v-btn>
    </v-form>
</template>

<script>
import eBayMixin from '@/mixins/ebayMixin'

export default {
    name: 'VFormEbay',

    mixins: [eBayMixin],

    data: () => ({
        ebayInventory: {},
        ebayOffer: {},
        valid: true,
        loading: false
    }),
    methods: {
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
    }

}

</script>