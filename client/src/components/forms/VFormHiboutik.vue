<template>
    <v-form v-model="valid" ref="form">
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
    </v-form>
</template>

<script>
import hiboutikMixin from '../../mixins/hiboutikMixin'

export default {
    name: 'VFormHiboutik',
    
    mixins: [hiboutikMixin],

    data: () => ({
        form: {},
        valid: true,
        loading: false
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
                this.$emit('getHiboutik', this.form)
                this.form = {}
            }
            this.loading = false
        }
    }

}
</script>