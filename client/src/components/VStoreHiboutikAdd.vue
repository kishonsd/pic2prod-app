<template>
  <div class="fields">
    <v-text-field label="Domain"
                  v-model="credentials.domain"
                  :rules="formRules.required" />

    <v-text-field label="Username"
                  v-model="credentials.username"
                  :rules="formRules.required" />

    <v-text-field label="Password"
                  v-model="credentials.password"
                  :rules="formRules.required" />
  </div>
</template>

<script>

import formRules from '@/mixins/formRules'
export default {
  name: 'VStoreHiboutikFields',
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