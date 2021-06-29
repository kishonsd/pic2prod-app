<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-space-between>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="orange--text">Register form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid"
                    ref="form">
              <v-text-field label="Email"
                            prepend-icon="mdi-email"
                            type="email"
                            v-model="form.email"
                            :rules="rulesMixin.email" />

              <v-text-field label="Username"
                            prepend-icon="mdi-account"
                            type="username"
                            v-model="form.username"
                            :rules="rulesMixin.username" />

              <v-text-field label="Password"
                            prepend-icon="mdi-lock"
                            type="password"
                            v-model="form.password"
                            :rules="rulesMixin.password" />

              <v-text-field label="Confirm Password"
                            prepend-icon="mdi-lock-open-check"
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
              <v-icon>mdi-pencil</v-icon>
              Submit
            </v-btn>
          </v-card-actions>

          <v-card-actions>
            Already have an account?
            <v-btn 
              class="ml-3"
              :loading="loading" 
              light
              @click="goToLogin"
            >
            <v-icon>mdi-lock-open-check</v-icon>
            Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
    goToLogin() {
      this.$router.push('/')
    },

    async handleRegister () {
      this.loading = true
      await serverUtil('user/create', {
        method: 'POST',
        data: this.form
      })
      .then(res => {
        console.log(res)
        this.$router.push('/')
      })
      this.loading = false
    }
  }
}
</script>