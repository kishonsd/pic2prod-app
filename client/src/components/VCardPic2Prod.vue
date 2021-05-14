<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-card max-width="500">
                            <v-card-text>
                                <v-form v-model="valid" ref="form">
                                    <v-text-field 
                                        label="Product Model" 
                                        v-model="form.product_name"
                                        :rules="rulesMixin.product.product_name"
                                    ></v-text-field>
                                    <v-text-field 
                                        label="Product Barcode" 
                                        v-model="form.product_barcode"
                                        :rules="rulesMixin.product.product_barcode"
                                    ></v-text-field>
                                    <v-text-field 
                                        label="Product Brand" 
                                        v-model="form.product_brand"
                                        :rules="rulesMixin.product.product_brand"
                                    ></v-text-field>
                                    <v-text-field 
                                        label="Product Supplier" 
                                        v-model="form.product_supplier"
                                        :rules="rulesMixin.product.product_supplier"
                                    ></v-text-field>
                                    <v-text-field 
                                        label="Product Price" 
                                        v-model="form.product_price"
                                        :rules="rulesMixin.product.product_price"
                                    ></v-text-field>
                                    <v-btn 
                                        small color="primary" 
                                        :disabled="!valid"
                                        :loading="loading"
                                        @click="handlePost"
                                    >Add</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <h1>Active Combos</h1>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import rulesMixin from '../mixins/rulesMixin'
import serverUtil from '@/utils/serverUtil'

export default {
    name: 'VCardPic2Prod',
    mixins: [rulesMixin],

    data: () => ({
        form: {},
        valid: true,
        loading: false,
    }),
    methods: {
    async handlePost() {
      this.loading = true
      await serverUtil('/hiboutik/post', {
        method: 'POST',
        data: this.form
      })
      this.loading = false
    }
  }
}
</script>