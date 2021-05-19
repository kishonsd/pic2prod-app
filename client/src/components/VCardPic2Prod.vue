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
                                            v-model="form.product_name"
                                            :rules="rulesMixin.hiboutik.product_name"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Product Barcode" 
                                            v-model="form.product_barcode"
                                            :rules="rulesMixin.hiboutik.product_barcode"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Product Brand" 
                                            v-model="form.product_brand"
                                            :rules="rulesMixin.hiboutik.product_brand"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Product Supplier" 
                                            v-model="form.product_supplier"
                                            :rules="rulesMixin.hiboutik.product_supplier"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Product Price" 
                                            v-model="form.product_price"
                                            :rules="rulesMixin.hiboutik.product_price"
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
                                            :rules="rulesMixin.magento.sku"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Name" 
                                            v-model="form.name"
                                            :rules="rulesMixin.magento.name"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Attribute Set ID" 
                                            v-model="form.attribute_set_id"
                                            :rules="rulesMixin.magento.attribute_set_id"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Price" 
                                            v-model="form.price"
                                            :rules="rulesMixin.magento.price"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Visibility" 
                                            v-model="form.visibility"
                                            :rules="rulesMixin.magento.visibility"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Type ID" 
                                            v-model="form.type_id"
                                            :rules="rulesMixin.magento.type_id"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Weight" 
                                            v-model="form.weight"
                                            :rules="rulesMixin.magento.weight"
                                        ></v-text-field>
                                        <v-btn 
                                        color="primary" 
                                        :disabled="!valid"
                                        :loading="loading"
                                        @click="addToMagento"
                                        >Add</v-btn>
                                    </div>
                                    <div v-else>
                                        <h1>No Form to Show</h1>
                                    </div>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <h1>Active Combos</h1>
                        <v-btn 
                            color="primary"
                            :loading="loading"
                            @click="handlePost"
                        >Combo</v-btn>
                        <v-expansion-panels class="mt-5" v-for="(item,index) in items" :key="index">
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    {{ selectedPlatform }}
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
import serverUtil from '../utils/serverUtil'

export default {
    name: 'VCardPic2Prod',
    mixins: [rulesMixin],

    data: () => ({
        platform: ['Hiboutik', 'Magento', 'eBay'],
        selectedPlatform: 'Hiboutik',
        items: [],
        form: {},
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
                this.form.server = '/hiboutik/post'
                this.items.push(this.form)
                this.form = {}
            }
            this.loading = false
        },

        addToMagento() {
            this.loading = true
            if(this.$refs.form.validate()) {
                Object.defineProperty(this.form, 'server', {
                    enumerable: false,
                    writable: true
                })
                this.form.server = '/magento/post'
                this.items.push(this.form)
                this.form = {}
            }
            this.loading = false
        },

        async handlePost() {
            this.loading = true
            await this.items.map((item) => {
                serverUtil(item.server, {
                    method: 'POST',
                    data: item
                })
            })
            this.loading = false
        }
  }
}
</script>