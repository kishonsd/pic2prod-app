<template>
  <div class="post-hiboutik-add">
    <v-select label="Fields"
              v-model="selected"
              :items="fields"
              multiple
              :rules="formRules.required"></v-select>

    <v-text-field v-model="meta[field]"
                  :label="field"
                  v-for="field in selected"
                  :key="field" />
  </div>
</template>

<script>
import formRules from '@/mixins/formRules'
export default {
  name: 'VPostHiboutikAdd',
  props: {
    store: {
      type: Object
    }
  },
  data: () => ({
    meta: {},
    formRules,
    selected: [],
    fields: [
      "product_model",
      "product_barcode",
      "product_brand",
      "product_supplier",
      "product_price",
      "product_discount_price",
      "product_supply_price",
      "product_category",
      "product_size_type",
      "product_stock_management",
      "product_supplier_reference",
      "product_package",
      "product_vat"
    ]
  }),

  watch: {
    meta (v) {
      if (v) this.store.meta = v
      else this.store.meta = {}
    }
  }
}
</script>