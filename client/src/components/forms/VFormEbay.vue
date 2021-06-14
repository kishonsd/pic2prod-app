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
        <v-select
          :items="marketPlace"
          v-model="ebayOffer.marketplaceId"
          label="MarketPlace"
        ></v-select>
        <v-text-field 
            label="Format"
            v-model="ebayOffer.format"
            :rules="eBayMixin.format"
        ></v-text-field>
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
        <v-text-field 
            label="Price Currency"
            v-model="ebayOffer.currency"
            :rules="eBayMixin.currency"
        ></v-text-field>
        <v-select
          :items="fPolicy"
          v-model="ebayOffer.fullfillmentPolicyId"
          :item-text="'name'"
          :item-value="'id'"
          label="Fullfillment Policy"
        ></v-select>
        <v-select
          :items="pPolicy"
          v-model="ebayOffer.paymentPolicyId"
          :item-text="'name'"
          :item-value="'id'"
          label="Payment Policy"
        ></v-select>
        <v-select
          :items="rPolicy"
          v-model="ebayOffer.returnPolicyId"
          :item-text="'name'"
          :item-value="'id'"
          label="Return Policy"
        ></v-select>
        <v-text-field 
            label="Category"
            v-model="ebayOffer.categoryId"
            :rules="eBayMixin.categoryId"
        ></v-text-field>
        <v-select
          :items="location"
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
        fPolicy: [{id: '186942543021', name: 'Free shipping'}],
        pPolicy: [{id: '186943286021', name: 'Paypal'}],
        rPolicy: [{id: '186943591021', name: '30d'}],
        location: [{name: 'MONTPC - Services Informatiques'}],
        marketPlace: ['EBAY_US'],
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