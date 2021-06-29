<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-space-between>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Admin Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field 
                prepend-icon="mdi-account"
                label="Username" 
                v-model="form.username"
                type="text" 
                required
                :rules="rulesMixin.username"
              ></v-text-field>
              <v-text-field 
                prepend-icon="mdi-lock"
                label="Password" 
                v-model="form.password"
                type="password" 
                required
                :rules="rulesMixin.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn 
              color="primary" 
              :loading="loading" 
              :disabled="!valid"
              @click="handleLogin"
            >
            <v-icon left>mdi-lock-open-check</v-icon>
            Login
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            Don't have an account?
            <v-btn 
              class="ml-3"
              :loading="loading" 
              light
              @click="goToRegister"
            >
            <v-icon>mdi-pencil</v-icon>
            Sign Up
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import serverUtil from '@/utils/serverUtil'
import rulesMixin from '../mixins/rulesMixin'

export default {
  name: 'VCardLogin',
  
  mixins: [rulesMixin],

  data: () => ({
    form: {
      username: '',
      password: ''
    },
    loading: false,
    valid: true,
  }),
  methods: {
    goToRegister() {
      this.$router.push('/register')
    },

    async handleLogin() {
      this.loading = true
      if(this.$refs.form.validate()) {
        await serverUtil('session/login', {
          method: 'POST',
          data: this.form
        })
        .then(res => {
          this.$store.commit('user/setMe', res.data)
          this.$router.push('/panel')
        })
      }
      this.form.password = ''
      this.loading = false
    }
  }
}

</script>