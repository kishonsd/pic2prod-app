<template>
  <div class="v-post-magento-add">
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
  name: 'VPostMagentoAdd',
  mixins: [formRules],
  data: () => ({
    selected: [],
    meta: {},
    fields: [
      "sku",
      "name",
      "attribute_set_id",
      "price",
      "status",
      "visibility",
      "type_id",
      "weight",
    ]
  })
}
</script>