<template>
  <v-card max-width="500">
    <v-card-title class="orange--text">
      Register
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid"
              ref="form">
        <v-text-field label="Email"
                      type="email"
                      v-model="form.email"
                      :rules="rulesMixin.email" />

        <v-text-field label="Username"
                      type="username"
                      v-model="form.username"
                      :rules="rulesMixin.username" />

        <v-text-field label="Password"
                      type="password"
                      v-model="form.password"
                      :rules="rulesMixin.password" />

        <v-text-field label="Confirm Password"
                      type="password"
                      v-model="form.confirmPassword"
                      :rules="[v => v === form.password || 'Password does not match']" />

      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary"
             :disabled="!valid"
             :loading="loading"
             @click="handleRegister">
        Submit
      </v-btn>
    </v-card-actions>

    <v-card-actions>
      <router-link to="/">Already have an account?</router-link>
    </v-card-actions>
  </v-card>
</template>   

<script>
import serverUtil from '@/utils/serverUtil'
import rulesMixin from '@/mixins/rulesMixin'

export default {
  name: 'VCardRegister',

  mixins: [rulesMixin],

  data: () => ({
    form: {},
    valid: true,
    loading: false
  }),

  methods: {
    async handleRegister () {
      this.loading = true
      await serverUtil('user/create', {
        method: 'POST',
        data: this.form
      })
      this.loading = false
    }
  }
}
</script>