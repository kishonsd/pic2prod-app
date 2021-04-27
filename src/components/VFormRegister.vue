<template>
  <v-form ref="form"
          v-model="valid">
    <v-text-field label="Email"
                  type="email"
                  v-model="form.email" />

    <v-text-field label="Username"
                  type="text"
                  v-model="form.username" />

    <v-text-field label="Password"
                  type="password"
                  v-model="form.password" />

    <v-text-field label="Confirm Password"
                  type="password"
                  v-model="form.confirmPassword" />

    <v-btn color="primary"
           @click="handleRegister"
           outlined>
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import server from '@/mixins/server'

export default {
  name: 'VFormRegister',
  mixins: [server],

  data: () => ({
    form: {},
    valid: true
  }),

  methods: {
    async handleRegister () {
      const { email, username, password, confirmPassword } = this.form
      await this.server('user/register', {
        method: 'POST',
        data: { email, username, password, confirmPassword }
      })
    }
  }
}
</script>