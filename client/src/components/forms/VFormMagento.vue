<template>
    <v-form v-model="valid" ref="form">
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
    </v-form>
</template>

<script>
import magentoMixin from '@/mixins/magentoMixin'

export default {
    name: 'VFormMagento',

    mixins: [magentoMixin],

    data: () => ({
        form: {},
        valid: true,
        loading: false
    }),
    methods: {
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
                this.$emit('getMagento', this.form)
                this.form = {}
            }
            this.loading = false
        },
    }
}

</script>