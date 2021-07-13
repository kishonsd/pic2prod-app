<template>
  <v-main class="primary">
    <v-container fill-height>
      <v-row>
        <v-col cols="12">
          <v-card color="transparent"
                  flat
                  dark
                  max-width="400"
                  class="mx-auto">
            <v-card-text>
              <v-img src="@/assets/Take a Survey.png" />
              <v-form v-model="valid"
                      ref="form">
                <v-text-field v-model="user.email"
                              label="Email"
                              type="email"
                              :rules="formRule.email" />

                <v-text-field v-model="user.password"
                              label="Password"
                              type="password"
                              :rules="formRule.password" />

                <v-text-field v-model="confirmPassword"
                              label="Confirm password"
                              type="password"
                              :rules="[
                                ...formRule.password,
                                v => v === user.password || 'Password does not match'
                              ]" />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn @click="handleSignup"
                     :loading="loading"
                     :disabled="!valid"
                     class="pa-5"
                     color="success"
                     block
                     rounded
                     dark>
                Sign up
              </v-btn>
            </v-card-actions>

            <v-card-actions>
              <v-btn to="/signin"
                     :loading="loading"
                     block
                     rounded
                     class="pa-5"
                     outlined
                     dark>
                Already have an account?
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import firebase from 'firebase'
import formRule from '@/utilities/formRule'

export default {
  name: 'Signup',

  data: () => ({
    user: {
      displayName: '',
      email: '',
      password: ''
    },

    valid: true,
    loading: false,
    formRule: formRule,
    confirmPassword: ''
  }),

  methods: {
    async handleSignup () {
      this.loading = true
      if (this.$refs.form.validate()) {
        await firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then(async () => {
            this.user = {}
            this.confirmPassword = ''
            await firebase.auth().currentUser.sendEmailVerification()
          })
          .catch(err => alert(err.message))
      }
      this.loading = false
    }
  }
}
</script>