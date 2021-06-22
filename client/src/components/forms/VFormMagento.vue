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
        <v-select
            :items="categories"
            v-model="mainCateg"
            :item-text="'name'"
            :item-value="getCatValues"
            label="Category"
        ></v-select>
        <div v-if="mainCateg.children_data && mainCateg.children_data.length != 0">
            <v-select
                :items="mainCateg.children_data"
                v-model="subCateg1"
                :item-text="'name'"
                :item-value="getCatValues"
                label="Sub Category"
            ></v-select>
            <div v-if="subCateg1.children_data != 0">
                <v-select
                    :items="subCateg1.children_data"
                    v-model="subCateg2"
                    :item-text="'name'"
                    :item-value="getCatValues"
                    label="Sub Category"
                ></v-select>
                <div v-if="subCateg2.children_data != 0">
                    <v-select
                        :items="subCateg2.children_data"
                        v-model="subCateg3"
                        :item-text="'name'"
                        :item-value="getCatValues"
                        label="Sub Category"
                    ></v-select>
                    <div v-if="subCateg3.children_data != 0">
                        <v-select
                            :items="subCateg3.children_data"
                            v-model="subCateg4"
                            :item-text="'name'"
                            :item-value="getCatValues"
                            label="Sub Category"
                        ></v-select>
                    </div>
                </div>
            </div>
        </div>
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
import serverUtil from '../../utils/serverUtil'

export default {
    name: 'VFormMagento',

    mixins: [magentoMixin],

    data: () => ({
        categories: [],
        mainCateg: {},
        subCateg1: {},
        subCateg2: {},
        subCateg3: {},
        subCateg4: {},
        
        
        form: {},
        valid: true,
        loading: false
    }),

    mounted() {
        this.categoriesGet()
    },
    methods: {
        isEmpty(obj) {
            return Object.keys(obj).length === 0
        },
        getCatValues(item) {
            return {
                position: item.position,
                id: item.id,
                children_data: item.children_data
            }
        },
        categoriesGet() {
            serverUtil('pic2prod/magento/categories', {
                method: 'GET'
            })
            .then(res => {
                res.map(cat => {
                    this.categories.push({
                        id: cat.id,
                        name: cat.name,
                        position: 0,
                        children_data: cat.children_data
                    })
                })
                console.log(this.categories)
            })
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
                Object.defineProperty(this.mainCateg, 'children_data', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.subCateg1, 'children_data', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.subCateg2, 'children_data', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.subCateg3, 'children_data', {
                    enumerable: false,
                    writable: true
                })
                Object.defineProperty(this.subCateg4, 'children_data', {
                    enumerable: false,
                    writable: true
                })
                this.form.platform = 'Magento'
                this.form.server = 'pic2prod/magento'
                var jsonArray = []
                if(this.isEmpty(this.subCateg1)) {
                    delete Object.assign(this.mainCateg, {category_id: this.mainCateg.id}).id
                    jsonArray.push(this.mainCateg)
                } else if(this.isEmpty(this.subCateg2)) {
                    delete Object.assign(this.mainCateg, {category_id: this.mainCateg.id}).id
                    delete Object.assign(this.subCateg1, {category_id: this.subCateg1.id}).id
                    jsonArray.push(this.mainCateg, this.subCateg1)
                } else if(this.isEmpty(this.subCateg3)) {
                    delete Object.assign(this.mainCateg, {category_id: this.mainCateg.id}).id
                    delete Object.assign(this.subCateg1, {category_id: this.subCateg1.id}).id
                    delete Object.assign(this.subCateg2, {category_id: this.subCateg2.id}).id
                    jsonArray.push(this.mainCateg, this.subCateg1, this.subCateg2)
                } else if(this.isEmpty(this.subCateg4)) {
                    delete Object.assign(this.mainCateg, {category_id: this.mainCateg.id}).id
                    delete Object.assign(this.subCateg1, {category_id: this.subCateg1.id}).id
                    delete Object.assign(this.subCateg2, {category_id: this.subCateg2.id}).id
                    delete Object.assign(this.subCateg3, {category_id: this.subCateg3.id}).id
                    jsonArray.push(this.mainCateg, this.subCateg1, this.subCateg2, this.subCateg3)
                } else {
                    delete Object.assign(this.subCateg1, {category_id: this.subCateg1.id}).id
                    delete Object.assign(this.subCateg2, {category_id: this.subCateg2.id}).id
                    delete Object.assign(this.subCateg3, {category_id: this.subCateg3.id}).id
                    delete Object.assign(this.subCateg4, {category_id: this.subCateg4.id}).id
                    jsonArray.push(this.mainCateg, this.subCateg1, this.subCateg2, this.subCateg3, this.subCateg4)
                }
                this.form.categories = jsonArray
                this.$emit('getMagento', this.form)
                this.form = {}
            }
            this.loading = false
        },
    }
}

</script>