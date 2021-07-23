<template>
  <div class="v-post-magento-add">
    <v-select label="Fields"
              v-model="selected"
              :items="fields"
              multiple
              :rules="formRules.required"></v-select>
  </div>
</template>

<script>
import formRules from '@/mixins/formRules'

export default {
  name: 'VPostMagentoAdd',
  mixins: [formRules],
  data: () => ({
    selected: [],
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