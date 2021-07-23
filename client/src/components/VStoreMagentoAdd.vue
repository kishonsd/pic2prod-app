<template>
  <div class="fields">
    <v-text-field label="Domain"
                  v-model="credentials.domain"
                  :rules="formRules.required" />

    <v-text-field label="Token"
                  v-model="credentials.token"
                  :rules="formRules.required" />
  </div>
</template>

<script>

import formRules from '@/mixins/formRules'
export default {
  name: 'VStoreMagentoAdd',
  props: {
    credentials: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    formRules
  })
}
</script>

<style>
</style>