<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-select
                        :items="platform"
                        v-model="selectedPlatform"
                        label="Platform List"
                        outlined
                        ></v-select>
                        <v-card max-width="500">
                            <v-card-text>
                                <v-form v-model="valid" ref="form">
                                    <div v-if="selectedPlatform === 'Hiboutik'">
                                        <v-text-field 
                                            label="Product Model" 
                                            v-model="form.product_model"
                                            :rules="hiboutikMixin.product_model"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Product Barcode" 
                                            v-model="form.product_barcode"
                                            :rules="hiboutikMixin.product_barcode"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Product Brand" 
                                            v-model="form.product_brand"
                                            :rules="hiboutikMixin.product_brand"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Product Supplier" 
                                            v-model="form.product_supplier"
                                            :rules="hiboutikMixin.product_supplier"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Product Price" 
                                            v-model="form.product_price"
                                            :rules="hiboutikMixin.product_price"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Host" 
                                            v-model="form.host"
                                            :rules="hiboutikMixin.host"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Username" 
                                            v-model="form.username"
                                            :rules="hiboutikMixin.username"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Password" 
                                            v-model="form.password"
                                            :rules="hiboutikMixin.password"
                                        ></v-text-field>
                                        <v-btn 
                                        color="primary" 
                                        :disabled="!valid"
                                        :loading="loading"
                                        @click="addToHiboutik"
                                        >Add</v-btn>
                                    </div>
                                    <div v-else-if="selectedPlatform === 'Magento'">
                                        <v-text-field 
                                            label="Sku" 
                                            v-model="form.sku"
                                            :rules="magentoMixin.sku"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Name" 
                                            v-model="form.name"
                                            :rules="magentoMixin.name"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Attribute Set ID" 
                                            v-model="form.attribute_set_id"
                                            :rules="magentoMixin.attribute_set_id"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Price" 
                                            v-model="form.price"
                                            :rules="magentoMixin.price"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Status" 
                                            v-model="form.status"
                                            :rules="magentoMixin.status"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Visibility" 
                                            v-model="form.visibility"
                                            :rules="magentoMixin.visibility"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Type ID" 
                                            v-model="form.type_id"
                                            :rules="magentoMixin.type_id"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Weight" 
                                            v-model="form.weight"
                                            :rules="magentoMixin.weight"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Host" 
                                            v-model="form.host"
                                            :rules="magentoMixin.host"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Token" 
                                            v-model="form.token"
                                            :rules="magentoMixin.token"
                                        ></v-text-field>
                                        <v-btn 
                                        color="primary" 
                                        :disabled="!valid"
                                        :loading="loading"
                                        @click="addToMagento"
                                        >Add</v-btn>
                                    </div>
                                    <div v-else-if="selectedPlatform === 'eBay'">
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
                                        @click="eBayAddInventory"
                                        >Add</v-btn>
                                    </div>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div>
                            <h1>Active Combos</h1>
                            <VButtonLogout class="float-right" />
                        </div>
                        <v-btn 
                            color="primary"
                            :loading="loading"
                            @click="handlePost"
                        >Combo</v-btn>
                        <v-expansion-panels class="mt-5" v-for="(item,index) in items" :key="index">
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    {{ item.platform }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <code>
                                        <pre>
{{ item }}
                                        </pre>
                                    </code>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import rulesMixin from '../mixins/rulesMixin'
import hiboutikMixin from '../mixins/hiboutikMixin'
import magentoMixin from '../mixins/magentoMixin'
import eBayMixin from '../mixins/ebayMixin'
import serverUtil from '../utils/serverUtil'
import VButtonLogout from './VButtonLogout'

export default {
    name: 'VCardPic2Prod',
    components: {
        VButtonLogout
    },
    mixins: [rulesMixin, hiboutikMixin, magentoMixin, eBayMixin],

    data: () => ({
        platform: ['Hiboutik', 'Magento', 'eBay'],
        selectedPlatform: 'Hiboutik',
        items: [],
        offers: [],
        form: {},
        ebayInventory: {},
        ebayOffer: {},
        valid: true,
        loading: false,
    }),
    methods: {
        addToHiboutik() {
            this.loading = true
            if(this.$refs.form.validate()) {
                Object.defineProperty(this.form, 'server', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.form, 'platform', {
                    enumerable: false,
                    writable: true
                })
                this.form.platform = 'Hiboutik'
                this.form.server = 'pic2prod/hiboutik'
                this.items.push(this.form)
                this.form = {}
            }
            this.loading = false
        },

        addToMagento() {
            this.loading = true
            if(this.$refs.form.validate()) {
                Object.defineProperty(this.form, 'platform', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.form, 'server', {
                    enumerable: false,
                    writable: true
                })
                this.form.platform = 'Magento'
                this.form.server = 'pic2prod/magento'
                this.items.push(this.form)
                this.form = {}
            }
            this.loading = false
        },

        eBayAddInventory() {
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
                this.items.push(this.ebayInventory, this.ebayOffer)
                this.form = {}
            }
            this.loading = false
        },

        async handlePost() {
            this.loading = true
            await this.items.map((item) => {
                if(item.platform === 'eBayInventory') {
                    serverUtil(item.server, {
                        method: 'PUT',
                        data: item
                    })
                } else if(item.platform === 'eBayOffer') {
                    serverUtil(item.server, {
                        method: 'POST',
                        data: item
                    })
                } else {
                    serverUtil(item.server, {
                        method: 'POST',
                        data: item
                    })
                }
            })
            this.loading = false
        }
  }
}
</script>