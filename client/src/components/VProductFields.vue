<template>
  <div class="product-fields">
    <v-file-input v-model="file.obj"
                  :rules="formRule.required"
                  label="Image"
                  accept="image/*" />

    <v-text-field v-model="form.name"
                  :rules="formRule.required"
                  label="Name"
                  prepend-icon="mdi-basket" />

    <v-text-field v-model="form.price"
                  :rules="formRule.required"
                  label="Price"
                  prepend-icon="mdi-cash" />

    <v-textarea v-model="form.description"
                :rules="formRule.required"
                label="Description"
                prepend-icon="mdi-text" />
  </div>
</template>

<script>
import formRule from '@/utilities/formRule'

export default {
  name: 'VProductFields',
  props: {
    form: {
      type: Object,
      default: () => new Object()
    },

    file: {
      type: Object,
      default: () => new Object()
    }
  },

  data: () => ({
    formRule: formRule
  })
}
</script>

<style>
</style>