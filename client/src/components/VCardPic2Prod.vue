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
                                        label="Product Name" 
                                        v-model="form.product_name"
                                        :rules="rulesMixin.product_name"
                                    ></v-text-field>
                                    <v-text-field 
                                        label="Product Price" 
                                        v-model="form.product_price"
                                        :rules="rulesMixin.product_price"
                                    ></v-text-field>
                                    <div class="facebook" v-if="platforms.facebook">
                                        <v-text-field 
                                            label="Consumer Key" 
                                            v-model="form.consumer_key"
                                            :rules="rulesMixin.consumer_key"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Value" 
                                            v-model="form.consumer_password"
                                            :rules="rulesMixin.consumer_password"
                                        ></v-text-field>
                                    </div>
                                    <div class="hiboutik" v-if="platforms.hiboutik">
                                        <v-text-field 
                                            label="Username" 
                                            v-model="form.username"
                                            :rules="rulesMixin.username"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="Password" 
                                            v-model="form.password"
                                            :rules="rulesMixin.password"
                                        ></v-text-field>
                                    </div>
                                    <div class="eBay" v-if="platforms.eBay">
                                        <v-text-field 
                                            label="eBay API Key" 
                                            v-model="form.username"
                                            :rules="rulesMixin.username"
                                        ></v-text-field>
                                        <v-text-field 
                                            label="eBay API Password" 
                                            v-model="form.password"
                                            :rules="rulesMixin.password"
                                        ></v-text-field>
                                    </div>
                                    <div class="d-flex">
                                        <v-checkbox
                                        v-model="platforms.facebook"
                                        label="Facebook"
                                        color="primary"
                                        value="Facebook"
                                        hide-details
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="platforms.hiboutik"
                                        label="Hiboutik"
                                        color="secondary"
                                        value="Hiboutik"
                                        hide-details
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="platforms.eBay"
                                        label="eBay"
                                        color="success"
                                        value="eBay"
                                        hide-details
                                    ></v-checkbox>
                                    </div>
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

export default {
    name: 'VCardPic2Prod',
    mixins: [rulesMixin],

    data: () => ({
        form: {},
        platforms: {
            facebook: false,
            hiboutik: false,
            eBay: false
        },
        valid: true,
        loading: false,
    }),
    methods: {
    handlePost() {
      this.loading = true
      this.loading = false
    }
  }
}
</script>