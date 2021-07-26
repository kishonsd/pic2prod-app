<template>
  <div class="product-fields">
    <v-file-input v-model="file.obj"
                  label="Image"
                  accept="image/*" />

    <v-text-field v-model="form.name"
                  :rules="formRules.required"
                  label="Name"
                  prepend-icon="mdi-basket" />

    <v-text-field v-model="form.price"
                  :rules="formRules.required"
                  label="Price"
                  prepend-icon="mdi-cash" />

    <v-textarea v-model="form.description"
                :rules="formRules.required"
                label="Description"
                prepend-icon="mdi-text" />
  </div>
</template>

<script>
import formRules from '@/mixins/formRules'

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
  mixins: [formRules]
}
</script>

<style>
</style>