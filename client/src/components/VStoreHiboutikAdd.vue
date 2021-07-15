<template>
  <div class="fields">
    <v-text-field label="Domain"
                  v-model="credentials.domain"
                  :rules="formRule.required" />

    <v-text-field label="Username"
                  v-model="credentials.username"
                  :rules="formRule.required" />

    <v-text-field label="Password"
                  v-model="credentials.password"
                  :rules="formRule.required" />
  </div>
</template>

<script>

import formRule from '@/utilities/formRule'
export default {
  name: 'VStoreHiboutikFields',
  props: {
    credentials: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    formRule
  })
}
</script>

<style>
</style>