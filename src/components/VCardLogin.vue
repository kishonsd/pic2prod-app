<template>
  <v-card-text>
    <v-form v-model="valid" ref="form">
      <v-text-field 
        label="Username" 
        type="text" 
        :rules="rulesMixin.username"
      ></v-text-field>
      <v-text-field 
        label="Password" 
        type="password" 
        :rules="rulesMixin.password"
      ></v-text-field>
    </v-form>
    <v-card-actions>
      <v-btn 
        color="primary" 
        :loading="loading" 
        :disabled="!valid"
        @click="handleLogin"
      >Submit</v-btn>
    </v-card-actions>
  </v-card-text>
</template>

<script>
import serverUtil from '@/utils/serverUtil'
import rulesMixin from '../mixins/rulesMixin'

export default {
  name: 'VCardLogin',
  
  mixins: [rulesMixin],

  data: () => ({
    form: {},
    loading: false,
    valid: true,
  }),
  methods: {
    handleLogin() {
      this.loading = true
      if(this.$refs.form.validate()) {
        serverUtil('session/login', {
          method: 'POST',
          data: this.form
        })
      }
      this.loading = false
    }
  }
}

</script>