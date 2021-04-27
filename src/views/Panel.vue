<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto"
                max-width="500">
          <v-form ref="form"
                  v-model="valid">

            <div class="product">
              <v-card-title class="warning--text">
                Product
              </v-card-title>
              <v-card-text>
                <v-text-field label="Name"
                              type="text"
                              v-model="form.basic.name"
                              :rules="[
                                fieldRequired
                              ]" />

                <v-text-field label="Price"
                              type="number"
                              v-model="form.basic.price" />
              </v-card-text>
            </div>

            <div class="platforms">
              <v-card-title class="warning--text">
                Platforms
              </v-card-title>

              <v-card-text>
                <v-checkbox label="Hiboutik"
                            v-model="hiboutik" />

                <v-checkbox label="Magento"
                            v-model="magento" />

                <v-checkbox label="Ebay"
                            v-model="ebay" />

              </v-card-text>
            </div>

            <div class="hiboutik"
                 v-if="hiboutik">
              <v-card-title class="warning--text">Hiboutik</v-card-title>
              <v-card-text>
                <v-text-field label="Host"
                              v-model="hiboutikAuth.host"
                              :rules="[
                                fieldRequired
                              ]" />

                <v-text-field label="Username"
                              v-model="hiboutikAuth.username"
                              :rules="[
                                fieldRequired
                              ]" />

                <v-text-field label="Password"
                              v-model="hiboutikAuth.password"
                              :rules="[
                                fieldRequired
                              ]" />

                <v-btn color="primary"
                       :loading="loading"
                       @click="handleAuthorizeHiboutik"
                       outlined>
                  Authorize
                </v-btn>

                <v-divider class="mt-5 mb-12" />

                <div class="hiboutik-authorized"
                     v-if="hiboutikAuthorized">

                  <v-text-field label="Model"
                                type="text"
                                v-model="form.basic.name"
                                disabled />

                  <v-text-field label="Barcode"
                                v-model="form.hiboutik.product_barcode" />

                  <v-select label="Brand"
                            :items="hiboutikBrands"
                            item-text="brand_name"
                            item-key="brand_id"
                            v-model="form.hiboutik.product_brand"
                            type="number" />

                  <v-text-field label="Supplier"
                                type="number"
                                v-model="form.hiboutik.product_supplier" />

                  <v-text-field label="Price"
                                type="number"
                                v-model="form.basic.price"
                                disabled />

                  <v-text-field label="Discount Price"
                                type="number"
                                v-model="form.hiboutik.product_discount_price" />

                  <v-text-field label="Supply Price"
                                type="number"
                                v-model="form.hiboutik.product_supply_price" />

                  <v-select label="Category"
                            type="number"
                            :items="hiboutikCategories"
                            v-model="form.hiboutik.product_category" />

                  <v-text-field label="Size Type"
                                type="number"
                                v-model="form.hiboutik.product_size_type" />

                  <v-text-field label="Stock Management"
                                type="integer"
                                v-model="form.hiboutik.product_stock_management" />

                  <v-text-field label="Supplier Reference"
                                type="text"
                                v-model="form.hiboutik.product_supplier_reference" />

                  <v-text-field label="Package"
                                type="number"
                                v-model="form.hiboutik.product_package" />

                  <v-text-field label="VAT"
                                type="number"
                                v-model="form.hiboutik.product_vat" />

                  <v-text-field label="External Ref"
                                type="text"
                                v-model="form.hiboutik.products_ref_ext" />
                </div>
              </v-card-text>
            </div>

            <div class="magento"
                 v-if="magento">
              <v-card-title class="warning--text">Magento</v-card-title>
              <v-card-text>
                <v-text-field label="Host"
                              type="text"
                              v-model="magentoAuth.host" />

                <v-text-field label="Token"
                              type="text"
                              v-model="magentoAuth.token" />

                <v-btn color="primary"
                       :loading="loading"
                       @click="handleAuthorizeMagento"
                       outlined>
                  Authorize
                </v-btn>

                <div class="magento-authorized"
                     v-if="magentoAuthorized">
                  <v-text-field label="SKU"
                                type="text"
                                v-model="form.magento.sku"
                                :rules="[
                                  fieldRequired
                                ]" />

                  <v-text-field label="Name"
                                type="text"
                                v-model="form.basic.name"
                                disabled />

                  <v-text-field label="Attribute ID"
                                type="number"
                                v-model="form.magento.atrribute_set_id" />

                  <v-text-field label="Price"
                                type="number"
                                v-model="form.basic.price"
                                disabled />

                  <v-text-field label="Status"
                                type="number"
                                v-model="form.magento.status" />

                  <v-text-field label="Visibility"
                                type="number"
                                v-model="form.magento.visibility" />

                  <v-text-field label="Type ID"
                                type="text"
                                v-model="form.magento.type_id" />

                  <v-text-field label="Weight"
                                type="number"
                                v-model="form.magento.weight" />
                </div>

              </v-card-text>
            </div>

            <div class="ebay"
                 v-if="ebay">
              <v-card-title class="warning--text">Ebay</v-card-title>
              <v-card-text></v-card-text>
            </div>

            <v-card-text>
              <v-btn color="primary"
                     :disabled="!valid"
                     :loading="loading"
                     @click="handleSubmit"
                     outlined>
                Submit
              </v-btn>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import server from '@/mixins/server'
import validation from '@/mixins/validation'

const formDefault = {
  basic: {
    name: 'Test',
    price: 1
  },
  hiboutik: {},
  magento: {},
  ebay: {}
}

export default {
  name: 'Panel',
  mixins: [
    server,
    validation
  ],

  data: () => ({
    valid: true,
    loading: false,
    form: formDefault,

    hiboutik: false,
    hiboutikAuthorized: false,
    hiboutikAuth: {},
    hiboutikBrands: [],
    hiboutikCategories: [],

    magento: true,
    magentoAuthorized: false,
    magentoCategories: [],
    magentoAuth: {
      host: 'https://montpc.com',
      token: 'z75icj5cetg6ms8acehmtc0uiwnkg1er'
    },

    ebay: false
  }),

  methods: {
    async handleAuthorizeHiboutik () {
      this.loading = true
      try {
        // get hiboutik brands
        this.hiboutikBrands = await axios({
          url: `${this.hiboutikAuth.host}/api/brands`,
          method: 'GET',
          auth: {
            username: this.hiboutikAuth.username,
            password: this.hiboutikAuth.password
          }
        }).then(response => response.data)



        this.hiboutikAuthorized = true
      } catch (error) {
        alert(error)
      }
      this.loading = false
    },

    async handleAuthorizeMagento () {
      this.loading = true
      try {
        const categories = await this.server('/magento/categories', {
          method: 'POST',
          data: {
            host: this.magentoAuth.host,
            token: this.magentoAuth.token
          }
        })
          .then(data => data.children_data || false)
        console.log(categories)
        if (categories) this.magentoCategories = categories
        this.magentoAuthorized = true
      } catch (error) {
        console.log(error.response)
      }
      this.loading = false
    },

    async handleSubmit () {
      this.loading = true
      try {

        if (this.hiboutik) {
          // post to hiboutik
          const form = new FormData()

          form.append('product_model', this.form.basic.name)
          form.append('product_price', this.form.basic.price)

          Object.keys(this.form.hiboutik)
            .forEach(key => {
              form.append(key, this.form.hiboutik[key])
            })


          await axios({
            url: `${this.hiboutikAuth.host}/api/products`,
            method: 'POST',
            data: form,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
              username: this.hiboutikAuth.username,
              password: this.hiboutikAuth.password
            }
          }).then(response => response.data)
        }

        if (this.magento) {
          // post to magento
          await this.server('/magento/products/create', {
            method: 'POST',
            data: {
              host: this.magentoAuth.host,
              token: this.magentoAuth.token,
              product: {
                name: this.form.basic.name,
                price: this.form.basic.price,
                ...this.form.magento
              }
            }
          })
        }
      } catch (error) {
        alert('Something went wrong sending your request to one of your stores.')
      }
      this.loading = false
    },
  }
}
</script>